/**
 * connectNote
 * 指定のユーザーの記事一覧を取得
 * 記事が無い場合とか画像が無い場合の表示とかは作る必要があります。
 */
const connectNote = () => {
  noteData.data.contents.forEach((post, index) => {
    if(index >= 3) return false
    const data = `
      <div>
        <div class="rounded-lg overflow-hidden aspect-[384/256] border"><img class="w-full h-full object-cover" src="${post.eyecatch}" alt=""></div>
        <div class="mt-8">
          <a class="hover:opacity-70 block" href="${post.noteUrl}" target="_blank">
            <time datatime="" class="text-xs text-gray-500 leading-6">${dayjs(post.publishAt).format('YYYY年M月D日')}</time>
            <p class="font-bold text-lg mt-3 leading-6">${post.name}</p>
            <p class="text-sm text-gray-600 mt-5 leading-6">${post.body}</p>
          </a>
        </div>
      </div>
    `
    document.querySelector('#post').insertAdjacentHTML('afterbegin', data)
  })
}
connectNote()

/**
 * connectGoogleForm
 * Google Form側でスクリプトを書く必要があったかも。
 */
const connectGoogleForm = () => {
  document.querySelector('#contactForm').addEventListener('submit', () => {
    console.log('send')
    window.location.href = '/thanks.html'
  })
}
connectGoogleForm()
