
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    
    const showdk = $('.show-modal-dk')
    const showdn = $('.show-modal-dn')
    const modalForms =  $$('.modal__form')
    const btnBacks = $$('.btn-back')
    const modal = $('.modal')
    const modalFormBtns = $$('.modal__form-btn')
       
    // xử lý khi nhấp vào đăng ký
    showdk.onclick = function () {
      $('.modal').classList.add('modal-active')
      modalForms[0].classList.add('modal__form-active')
    }
   
    // xử lý khi nhấp vào đăng nhập
    showdn.onclick = function () {
      $('.modal').classList.add('modal-active')
      modalForms[1].classList.add('modal__form-active')
    }
    //Khi nhấn vào nút trở lại
    for (var value of Object.values(btnBacks)) {
      value.onclick = function(){
      $('.modal').classList.remove('modal-active')
      $('.modal__form.modal__form-active').classList.remove('modal__form-active')
      }
    }
    
    // khi nhấp vào phần overlay
    modal.onclick = function(e){
      $('.modal').classList.remove('modal-active')
      $('.modal__form.modal__form-active').classList.remove('modal__form-active') 
      
    }
    for (var value of Object.values(modalForms)) {
      value.onclick = function(e){
      e.stopPropagation();
      }
    }
    
    // Xử lý nhấp vào đăng ký đăng nhập khi đã hiển thị lên form
    modalFormBtns[1].onclick = function () {
      modalForms[1].classList.remove('modal__form-active')
      modalForms[0].classList.add('modal__form-active')
      
    }
    modalFormBtns[0].onclick = function () {
      modalForms[0].classList.remove('modal__form-active')
      modalForms[1].classList.add('modal__form-active')
      
    }
    //Ngăn sự kiện nổi bot khi click vào thẻ ul lich sử tìm kiêm
    const historys = $('.header__search-history')
    historys.onmousedown = function(e){
      e.preventDefault()
    }

    // XỬ lý phần like sản phẩm
    const likes = $$('.home-product-item__favorite-like') 
    for (var value of Object.values(likes)) {
      value.onclick = function(e){
        this.classList.toggle('home-product-item__favorite-liked');
        console.log(this)
      }
    }
    // xử lý nút lên top
    // const btntop = $('.btntop')
    // btntop.onclick = function(e) {
        
    //     console.log(this)
    // };

    