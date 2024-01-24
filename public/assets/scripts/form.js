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
