class OverlayMenu {
  rootElement: Element | null
  dialogElement?: HTMLDialogElement | null
  burgerButtonElement?: HTMLButtonElement | null

  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
    menuLink: '.header__menu-link', // добавляем селектор ссылок
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.bindEvents()
  }

  closeMenu = () => {
    if (this.dialogElement?.open) {
      this.burgerButtonElement?.classList.remove(this.stateClasses.isActive)
      this.dialogElement.open = false
      document.documentElement.classList.remove(this.stateClasses.isLock)
    }
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement!.classList.toggle(this.stateClasses.isActive)
    this.dialogElement!.open = !this.dialogElement!.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  onLinkClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const link = target.closest(this.selectors.menuLink)
    
    if (link && this.dialogElement?.open) {
      this.closeMenu()
    }
  }

  onScroll = () => {
   
    if (this.dialogElement?.open) {
      this.closeMenu()
    }
  }

  bindEvents() {
    this.burgerButtonElement!.addEventListener(
      'click',
      this.onBurgerButtonClick
    )
    
    
    document.addEventListener('click', this.onLinkClick)
    
   
    window.addEventListener('scroll', this.onScroll)
  }
  
  destroy() {
    this.burgerButtonElement!.removeEventListener('click', this.onBurgerButtonClick)
    document.removeEventListener('click', this.onLinkClick)
    window.removeEventListener('scroll', this.onScroll)
  }
}

export default OverlayMenu