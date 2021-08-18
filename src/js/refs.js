export const getRefs = () => {
  return {
    ____________BODY:   null,
    body:               document.querySelector('body'),
    ____________HEADER: null,
    headerDivToChange:  document.querySelector('.header-search'),
    headerError:        document.querySelector('.header-search__error'),
    searchBox:          document.querySelector('.header-search__input'),
    searchButton:       document.querySelector('.header-search__button'),
    headerNav:          document.querySelector('.header-nav__list'),
    headerContainer:    document.querySelector('.header__container'),
    headerLogo:         document.querySelector('.header__logo'),
    engFlag:            document.querySelector('#englishLink'),
    rusFlag:            document.querySelector('#russianLink'),
    ukrFlag:            document.querySelector('#ukrainianLink'),
    filterList:         document.querySelector('.filter__list'),
    filterButton:       document.querySelector('.filter__button'),
    languageLinks:      document.querySelector('.control__languages'),
    _________FILMOTEKA: null,
    filmsSection:       document.querySelector('.filmoteka'),
    galleryItems:       document.querySelector('.filmoteka__set'),
    ________PAGINATION: null,
    paginationNav:      document.querySelector('.filmoteka-nav'),
    leftButton:         document.querySelector('.filmoteka-nav__left'),
    rightButton:        document.querySelector('.filmoteka-nav__right'),
    prevButton:         document.querySelector('.filmoteka-nav__prev'),
    nextButton:         document.querySelector('.filmoteka-nav__next'),
    firstButton:        document.querySelector('.filmoteka-nav__first'),
    lastButton:         document.querySelector('.filmoteka-nav__last'),
    pagesButton:        document.querySelector('.filmoteka-nav__pages--list'),
    ______MODALKA_DEVS: null,
    modalDevs:          document.querySelector('.modal-devs'),
    devCloseBtn:        document.querySelector('.modal-devs__close-btn'),
    ______MODALKA_FILM: null,
    modalFilm:          document.querySelector('.modal-film'),
    modalFilmContainer: document.querySelector('.modal-film__overlay'),
    modalWatchedBtn:    document.querySelector('.modal-film__btn-watched'),
    modalQueueBtn:      document.querySelector('.modal-film__btn-queque'),
    modalFilmCloseBtn:  document.querySelector('.modal-film__close'),
    modalCard:          document.querySelector('.modal-card'),
    ________MY_LIBRARY: null,
    watchedBtn:         document.querySelector('.my-library__watched-btn'),
    queueBtn:           document.querySelector('.my-library__queue-btn'),
    ____________FOOTER: null,
    footer:             document.querySelector('.footer'),
    devLink:            document.querySelector('.footer__dev--link'),
    _________SCROLL_UP: null,
    scrollTopBtn:       document.querySelector('.scroll__top'),
    _________SEARCH_PAGE: null,
    searchPage:         document.querySelector('.filmoteka-nav__search-page'),
    inputScs:           document.querySelector('.input-success'),
    buttonScs:          document.querySelector('.button-success'),
    containerScs:       document.querySelector('.notify'),
  };
};

export const getRefsLocals = () => {
  return {
    filmoteka_ref:        document.querySelector('.header__logo-name'),
    search_films_ref:     document.querySelector('.header-search__input'),
    home_ref:             document.querySelector('#homeLink'),
    my_library_ref:       document.querySelector('#myLibraryLink'),
    sign_nav_ref:         document.querySelector('.header-nav__modal-btn'),

    sign_up_name_ref:     document.querySelector('#signUpName'),
    sign_up_mail_ref:     document.querySelector('#signUpMail'),
    sign_up_password_ref: document.querySelector('#signUpPwd'),
    sign_up_confirm_ref:  document.querySelector('#signUpPwdConfirm'),
    sign_up_sex_ref:      document.querySelector('#signUpSex'),
    sign_up_male_ref:     document.querySelector('#signUpMale'),
    sign_up_female_ref:   document.querySelector('#signUpFemale'),
    sign_up_other_ref:    document.querySelector('#signUpOther'),
    sign_up_button_ref:   document.querySelector('.sign-up__button'),

    sign_in_name_ref:     document.querySelector('#signInName'),
    sign_in_mail_ref:     document.querySelector('#signInMail'),
    sign_in_password_ref: document.querySelector('#signInPwd'),
    sign_in_confirm_ref:  document.querySelector('#signInPwdConfirm'),
    sign_in_sex_ref:      document.querySelector('#signInSex'),
    sign_in_male_ref:     document.querySelector('#signInMale'),
    sign_in_female_ref:   document.querySelector('#signInFemale'),
    sign_in_other_ref:    document.querySelector('#signInOther'),
    sign_in_button_ref:   document.querySelector('.sign-in__button'),
    // sign_in_status_ref:  document.querySelector('.modal-form__status'),

    rights_ref:           document.querySelector('.lang__rights_text'),
    devs_ref:             document.querySelector('.lang__devs_text'),
    by_ref:               document.querySelector('.lang__by_text'),
    watched_ref:          document.querySelector('.my-library__watched-btn'),
    queue_ref:            document.querySelector('.my-library__queue-btn'),
    vote_ref:             document.querySelector('.modal-card__list-votes'),
    popularity_ref:       document.querySelector('.modal-card__list-popularity'),
    title_orign_ref:      document.querySelector('.modal-card__list-title'),
    genre_ref:            document.querySelector('.modal-card__list-genre'),
    about_ref:            document.querySelector('.modal-card__description-heading'),
    add_to_watched_ref:   document.querySelector('.modal-film__btn-watched'),
    add_to_queue_ref:     document.querySelector('.modal-film__btn-queque'),
    close_devs_ref:       document.querySelector('.modal-devs__close-btn'),
    team_devs_ref:        document.querySelector('.team__heading'),
    trending_ref:         document.querySelector('[data-set="trending"]'),
    latest_ref:           document.querySelector('[data-set="latest"]'),
    now_playing_ref:      document.querySelector('[data-set="now_playing"]'),
    popular_ref:          document.querySelector('[data-set="popular"]'),
    top_rated_ref:        document.querySelector('[data-set="top_rated"]'),
    upcoming_ref:         document.querySelector('[data-set="upcoming"]'),
    control_info_ref:     document.querySelector('.control__info'),
  };  
};
