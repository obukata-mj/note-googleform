/**
 * ConnectNote
 * 指定のユーザーの記事一覧を取得
 * 記事が無い場合とか画像が無い場合の表示とかは作る必要があります。
 */
class ConnectNote {
  constructor(obj) {

    this.target = obj.target
    this.type = obj.type
    this.postView = obj.postView
    this.postData

    this.ajaxRequest()
  }
  ajaxRequest() {
    // AJAXにてnoteapi.phpを読み込み
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        this.postData = JSON.parse(xhr.responseText)
        this.checkType()
      }
    }
    xhr.open("GET", "noteapi.php", true)
    xhr.send()
  }
  checkType() {
    // インスタンス生成時に設定したタイプによってレンダーの呼び出しを変更
    switch(this.type) {
      case 'thumbnail':
        this.thumbnailListRender()
        break;
      case 'text':
        this.textListRender()
        break;
      default:
        this.textListRender()
    }
  }
  thumbnailListRender() {
    // サムネイルありのパターン
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
  textListRender() {
    // サムネイル無しのパターン
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

new ConnectNote({
  target: document.querySelector('#textNote'),
  type: 'text',
  postView: 3
})

new ConnectNote({
  target: document.querySelector('#thumbnailNote'),
  type: 'thumbnail',
  postView: 3
})
