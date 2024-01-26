/**
 * ConnectNote.js
 * グラフAPIを使用した、Noteの投稿を埋め込む為のクラス
 *
 * @description
 *  本ファイルとは別に以下ファイルが必要です。
 *  - APIのリクエストを行うPHPファイル（ドキュメントルート内）
 *  - アクセストークンやビジネスIDなどのコンフィグファイル（ドキュメントルート外）
 *
 * @repository https://github.com/obukata-mj/note-googleform
 *
 * @author obukata
 * @version 1.0.0
 * @license MIT
 */

class ConnectNote {

  /**
   * @constructor
   * @param { Object } obj - 設定オブジェクトです。
   * @param { filePath } phpRequest - APIのリクエストを行うPHPファイルへのファイルパスです。
   * @param { HTMLElement } target - 投稿を埋め込む対象のHTML要素です。
   * @param { string } postData - 埋め込みのタイプ（'tile'または'list'）です。
   * @param { number } postView - 表示する最大投稿数です。（※PHP設定ファイル側に、APIへのリクエスト制限の数が別途存在します）
   */
  constructor(obj) {
    this.phpRequest = '/noteapi.php'
    this.target = obj.target
    this.type = obj.type
    this.postView = obj.postView
    this.postData

    this.#ajaxRequest()
  }

  /**
   * Noteの投稿データを取得するためのAJAXリクエストを行います。
   * @private
   */
  #ajaxRequest() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        this.postData = JSON.parse(xhr.responseText)
        this.#checkType()
      }
    }
    xhr.open("GET", this.phpRequest, true)
    xhr.send()
  }

  /**
   * タイプに基づいてレンダリングメソッドを切り替えます。
   * @private
   */
  #checkType() {
    switch(this.type) {
      case 'thumbnail':
        this.#thumbnailListRender()
        break;
      case 'text':
        this.#textListRender()
        break;
      default:
        this.#textListRender()
    }
  }

  /**
   * サムネイル付きのレイアウトでレンダリングします。
   * @private
   */
  #thumbnailListRender() {
    let data = `<div class="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">`
    this.postData.data.contents.forEach((post, index) => {
      if(index >= this.postView) return false
      data += `
        <div>
          <a class="hover:opacity-70 block" href="${post.noteUrl}" target="_blank">
            <div class="rounded-lg overflow-hidden aspect-[384/256] border"><img class="w-full h-full object-cover" src="${post.eyecatch}" alt=""></div>
              <div class="mt-8 max-sm:mt-4">
                <time class="flex-shrink-0 text-xs text-gray-500 leading-6">${dayjs(post.publishAt).format('YYYY年M月D日')}</time>
                <p class="font-bold text-lg mt-3 leading-6">${post.name}</p>
                <p class="text-sm text-gray-600 mt-5 leading-6">${post.body}</p>
            </div>
          </a>
        </div>
      `
    })
    data += `</div>`
    this.target.insertAdjacentHTML('afterbegin', data)
  }

  /**
   * サムネイル無しのレイアウトでレンダリングします。
   * @private
   */
  #textListRender() {
    let data = `<div class="border-t">`
    this.postData.data.contents.forEach((post, index) => {
      if(index >= this.postView) return false
      data += `
        <div class="border-b">
          <a class="hover:opacity-70 py-6 px-2 flex gap-6 max-sm:flex-col max-sm:gap-0" href="${post.noteUrl}" target="_blank">
            <time class="text-xs text-gray-500 leading-6">${dayjs(post.publishAt).format('YYYY年M月D日')}</time>
            <p class="font-bold text-lg leading-6">${post.name}</p>
          </a>
        </div>
      `
    })
    data += `</div>`
    this.target.insertAdjacentHTML('afterbegin', data)
  }
}
