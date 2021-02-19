import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (

            <div className="page-wrapper null compact-wrapper" id="pageWrapper">
                {/* Page Header Start*/}
                <div className="page-header">
                    <div className="header-wrapper row m-0">
                        <form className="form-inline search-full col" action="#" method="get">
                            <div className="form-group w-100">
                                <div className="Typeahead Typeahead--twitterUsers">
                                    <div className="u-posRelative">
                                        <span className="twitter-typeahead" style={{ position: 'relative', display: 'inline-block' }}><input className="demo-input Typeahead-input form-control-plaintext w-100 tt-hint" type="text" title autofocus readOnly autoComplete="off" spellCheck="false" tabIndex={-1} dir="ltr" style={{ position: 'absolute', top: 0, left: 0, borderColor: 'transparent', boxShadow: 'none', opacity: 1, background: 'none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)' }} data-bs-original-title /><input className="demo-input Typeahead-input form-control-plaintext w-100 tt-input" type="text" placeholder="Search Cuba .." name="q" title autofocus autoComplete="off" spellCheck="false" dir="auto" style={{ position: 'relative', verticalAlign: 'top' }} data-bs-original-title /><pre aria-hidden="true" style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', fontFamily: 'Rubik, sans-serif', fontSize: 14, fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, wordSpacing: 0, letterSpacing: 0, textIndent: 0, textRendering: 'auto', textTransform: 'none' }} /></span>
                                        <div className="spinner-border Typeahead-spinner" role="status"><span className="sr-only">Loading...</span></div><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close-search"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                    </div>
                                    <div className="Typeahead-menu"><div className="tt-dataset tt-dataset-0" /></div>
                                </div>
                            </div>
                        </form>
                        <div className="header-logo-wrapper col-auto p-0">
                            <div className="logo-wrapper"><a href="index.html" data-bs-original-title title><img className="img-fluid" src="../assets/images/logo/logo.png" alt /></a></div>
                            <div className="toggle-sidebar" checked="checked"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-center status_toggle middle sidebar-toggle"><line x1={18} y1={10} x2={6} y2={10} /><line x1={21} y1={6} x2={3} y2={6} /><line x1={21} y1={14} x2={3} y2={14} /><line x1={18} y1={18} x2={6} y2={18} /></svg></div>
                        </div>
                        <div className="left-header col horizontal-wrapper ps-0">
                            <ul className="horizontal-menu">
                                <li className="mega-menu outside"><a className="nav-link" href="/#!" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg></a>
                                    <div className="mega-menu-container nav-submenu menu-to-be-close header-mega" style={{ display: 'none' }}>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col mega-box">
                                                    <div className="mobile-title d-none">
                                                        <h5>Mega menu</h5><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                                                    </div>
                                                    <div className="link-section icon">
                                                        <div>
                                                            <h6>Error Page</h6>
                                                        </div>
                                                        <ul>
                                                            <li><a href="../theme/error-400.html" data-bs-original-title title>Error page 400</a></li>
                                                            <li><a href="../theme/error-401.html" data-bs-original-title title>Error page 401</a></li>
                                                            <li><a href="../theme/error-403.html" data-bs-original-title title>Error page 403</a></li>
                                                            <li><a href="../theme/error-404.html" data-bs-original-title title>Error page 404</a></li>
                                                            <li><a href="../theme/error-500.html" data-bs-original-title title>Error page 500</a></li>
                                                            <li><a href="../theme/error-503.html" data-bs-original-title title>Error page 503</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col mega-box">
                                                    <div className="link-section doted">
                                                        <div>
                                                            <h6> Authentication</h6>
                                                        </div>
                                                        <ul>
                                                            <li><a href="../theme/login.html" data-bs-original-title title>Login</a></li>
                                                            <li><a href="../theme/login_one.html" data-bs-original-title title>Login with image</a></li>
                                                            <li><a href="../theme/login-bs-validation.html" data-bs-original-title title>Login with validation</a></li>
                                                            <li><a href="../theme/sign-up.html" data-bs-original-title title>Sign Up</a></li>
                                                            <li><a href="../theme/sign-up-one.html" data-bs-original-title title>SignUp with image</a></li>
                                                            <li><a href="../theme/sign-up-two.html" data-bs-original-title title>SignUp with image</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col mega-box">
                                                    <div className="link-section dashed-links">
                                                        <div>
                                                            <h6>Usefull Pages</h6>
                                                        </div>
                                                        <ul>
                                                            <li><a href="../theme/search.html" data-bs-original-title title>Search Website</a></li>
                                                            <li><a href="../theme/unlock.html" data-bs-original-title title>Unlock User</a></li>
                                                            <li><a href="../theme/forget-password.html" data-bs-original-title title>Forget Password</a></li>
                                                            <li><a href="../theme/reset-password.html" data-bs-original-title title>Reset Password</a></li>
                                                            <li><a href="../theme/maintenance.html" data-bs-original-title title>Maintenance</a></li>
                                                            <li><a href="../theme/login-sa-validation.html" data-bs-original-title title>Login validation</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col mega-box">
                                                    <div className="link-section">
                                                        <div>
                                                            <h6>Email templates</h6>
                                                        </div>
                                                        <ul>
                                                            <li className="ps-0"><a href="../theme/basic-template.html" data-bs-original-title title>Basic Email</a></li>
                                                            <li className="ps-0"><a href="../theme/email-header.html" data-bs-original-title title>Basic With Header</a></li>
                                                            <li className="ps-0"><a href="../theme/template-email.html" data-bs-original-title title>Ecomerce Template</a></li>
                                                            <li className="ps-0"><a href="../theme/template-email-2.html" data-bs-original-title title>Email Template 2</a></li>
                                                            <li className="ps-0"><a href="../theme/ecommerce-templates.html" data-bs-original-title title>Ecommerce Email</a></li>
                                                            <li className="ps-0"><a href="../theme/email-order-success.html" data-bs-original-title title>Order Success</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col mega-box">
                                                    <div className="link-section">
                                                        <div>
                                                            <h6>Coming Soon</h6>
                                                        </div>
                                                        <ul className="svg-icon">
                                                            <li><a href="../theme/comingsoon.html" data-bs-original-title title> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>Coming-soon</a></li>
                                                            <li><a href="../theme/comingsoon-bg-video.html" data-bs-original-title title> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-film"><rect x={2} y={2} width={20} height={20} rx="2.18" ry="2.18" /><line x1={7} y1={2} x2={7} y2={22} /><line x1={17} y1={2} x2={17} y2={22} /><line x1={2} y1={12} x2={22} y2={12} /><line x1={2} y1={7} x2={7} y2={7} /><line x1={2} y1={17} x2={7} y2={17} /><line x1={17} y1={17} x2={22} y2={17} /><line x1={17} y1={7} x2={22} y2={7} /></svg>Coming-video</a></li>
                                                            <li><a href="../theme/comingsoon-bg-img.html" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>Coming-Image</a></li>
                                                        </ul>
                                                        <div>
                                                            <h6>Other Soon</h6>
                                                        </div>
                                                        <ul className="svg-icon">
                                                            <li><a className="txt-primary" href="../theme/landing-page.html" data-bs-original-title title> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-cast"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" /><line x1={2} y1={20} x2={2} y2={20} /></svg>Landing Page</a></li>
                                                            <li><a className="txt-secondary" href="../theme/sample-page.html" data-bs-original-title title> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><polygon points="12 15 17 21 7 21 12 15" /></svg>Sample Page</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="level-menu outside"><a className="nav-link" href="/#!" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg></a>
                                    <ul className="header-level-menu menu-to-be-close" style={{ display: 'none' }}>
                                        <li><a href="../theme/file-manager.html" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-pull-request"><circle cx={18} cy={18} r={3} /><circle cx={6} cy={6} r={3} /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1={6} y1={9} x2={6} y2={21} /></svg><span>File manager  </span></a></li>
                                        <li><a href="/#!" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg><span>Users</span></a>
                                            <ul className="header-level-sub-menu">
                                                <li><a href="../theme/user-profile.html" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg><span>User Profile</span></a></li>
                                                <li><a href="../theme/edit-profile.html" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg><span>User Edit</span></a></li>
                                                <li><a href="../theme/user-cards.html" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><polyline points="17 11 19 13 23 9" /></svg><span>Users Cards</span></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="../theme/kanban.html" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><polygon points="12 15 17 21 7 21 12 15" /></svg><span>Kanban Board</span></a></li>
                                        <li><a href="../theme/bookmark.html" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg><span>Bookmark</span></a></li>
                                        <li><a href="../theme/social-app.html" data-original-title title data-bs-original-title>                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg><span>Social App                   </span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right col-8 pull-right right-header p-0">
                            <ul className="nav-menus">
                                <li className="language-nav">
                                    <div className="translate_wrapper">
                                        <div className="current_lang">
                                            <div className="lang"><i className="flag-icon flag-icon-us" /><span className="lang-txt">EN                             </span></div>
                                        </div>
                                        <div className="more_lang">
                                            <div className="lang selected" data-value="en"><i className="flag-icon flag-icon-us" /><span className="lang-txt">English<span> (US)</span></span></div>
                                            <div className="lang" data-value="de"><i className="flag-icon flag-icon-de" /><span className="lang-txt">Deutsch</span></div>
                                            <div className="lang" data-value="es"><i className="flag-icon flag-icon-es" /><span className="lang-txt">Español</span></div>
                                            <div className="lang" data-value="fr"><i className="flag-icon flag-icon-fr" /><span className="lang-txt">Français</span></div>
                                            <div className="lang" data-value="pt"><i className="flag-icon flag-icon-pt" /><span className="lang-txt">Português<span> (BR)</span></span></div>
                                            <div className="lang" data-value="cn"><i className="flag-icon flag-icon-cn" /><span className="lang-txt">简体中文</span></div>
                                            <div className="lang" data-value="ae"><i className="flag-icon flag-icon-ae" /><span className="lang-txt">لعربية <span> (ae)</span></span></div>
                                        </div>
                                    </div>
                                </li>
                                <li>                         <span className="header-search"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg></span></li>
                                <li className="onhover-dropdown">
                                    <div className="notification-box"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" /></svg><span className="badge rounded-pill badge-secondary">4                              </span></div>
                                    <ul className="notification-dropdown onhover-show-div">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" /></svg>
                                            <h6 className="f-18 mb-0">Notitications</h6>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-circle-o me-3 font-primary"> </i>Delivery processing <span className="pull-right">10 min.</span></p>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-circle-o me-3 font-success" />Order Complete<span className="pull-right">1 hr</span></p>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-circle-o me-3 font-info" />Tickets Generated<span className="pull-right">3 hr</span></p>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-circle-o me-3 font-danger" />Delivery Complete<span className="pull-right">6 hr</span></p>
                                        </li>
                                        <li><a className="btn btn-primary" href="/#" data-bs-original-title title>Check all notification</a></li>
                                    </ul>
                                </li>
                                <li className="onhover-dropdown">
                                    <div className="notification-box"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                                    <div className="onhover-show-div bookmark-flip">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="front">
                                                    <ul className="droplet-dropdown bookmark-dropdown">
                                                        <li className="gradient-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                                            <h6 className="f-18 mb-0">Bookmark</h6>
                                                        </li>
                                                        <li>
                                                            <div className="row">
                                                                <div className="col-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg></div>
                                                                <div className="col-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                                                                <div className="col-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                                                                <div className="col-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x={8} y={2} width={8} height={4} rx={1} ry={1} /></svg></div>
                                                                <div className="col-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-anchor"><circle cx={12} cy={5} r={3} /><line x1={12} y1={22} x2={12} y2={8} /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg></div>
                                                                <div className="col-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></div>
                                                            </div>
                                                        </li>
                                                        <li className="text-center">
                                                            <button className="flip-btn" id="flip-btn" data-bs-original-title title>Add New Bookmark</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="back">
                                                    <ul>
                                                        <li>
                                                            <div className="droplet-dropdown bookmark-dropdown flip-back-content">
                                                                <input type="text" placeholder="search..." data-bs-original-title title />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <button className="d-block flip-back" id="flip-back" data-bs-original-title title>Back</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="mode"><i className="fa fa-moon-o" /></div>
                                </li>
                                <li className="cart-nav onhover-dropdown">
                                    <div className="cart-box"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg><span className="badge rounded-pill badge-primary">2</span></div>
                                    <ul className="cart-dropdown onhover-show-div">
                                        <li>
                                            <h6 className="mb-0 f-20">Shoping Bag</h6><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                        </li>
                                        <li className="mt-0">
                                            <div className="media"><img className="img-fluid rounded-circle me-3 img-60" src="../assets/images/ecommerce/01.jpg" alt />
                                                <div className="media-body"><span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>
                                                    <p>Yellow(#fcb102)</p>
                                                    <div className="qty-box">
                                                        <div className="input-group"><span className="input-group-prepend">
                                                            <button className="btn quantity-left-minus" type="button" data-type="minus" data-field data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1={5} y1={12} x2={19} y2={12} /></svg></button></span>
                                                            <input className="form-control input-number" type="text" name="quantity" defaultValue={1} data-bs-original-title title /><span className="input-group-prepend">
                                                                <button className="btn quantity-right-plus" type="button" data-type="plus" data-field data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></button></span>
                                                        </div>
                                                    </div>
                                                    <h6 className="text-end text-muted">$299.00</h6>
                                                </div>
                                                <div className="close-circle"><a href="/#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg></a></div>
                                            </div>
                                        </li>
                                        <li className="mt-0">
                                            <div className="media"><img className="img-fluid rounded-circle me-3 img-60" src="../assets/images/ecommerce/03.jpg" alt />
                                                <div className="media-body"><span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>
                                                    <p>Yellow(#fcb102)</p>
                                                    <div className="qty-box">
                                                        <div className="input-group"><span className="input-group-prepend">
                                                            <button className="btn quantity-left-minus" type="button" data-type="minus" data-field data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1={5} y1={12} x2={19} y2={12} /></svg></button></span>
                                                            <input className="form-control input-number" type="text" name="quantity" defaultValue={1} data-bs-original-title title /><span className="input-group-prepend">
                                                                <button className="btn quantity-right-plus" type="button" data-type="plus" data-field data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></button></span>
                                                        </div>
                                                    </div>
                                                    <h6 className="text-end text-muted">$299.00</h6>
                                                </div>
                                                <div className="close-circle"><a href="#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg></a></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="total">
                                                <h6 className="mb-2 mt-0 text-muted">Order Total : <span className="f-right f-20">$598.00</span></h6>
                                            </div>
                                        </li>
                                        <li><a className="btn btn-block w-100 mb-2 btn-primary view-cart" href="cart.html" data-bs-original-title title>Go to shoping bag</a><a className="btn btn-block w-100 btn-secondary view-cart" href="checkout.html" data-bs-original-title title>Checkout</a></li>
                                    </ul>
                                </li>
                                <li className="onhover-dropdown"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    <ul className="chat-dropdown onhover-show-div">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                            <h6 className="f-18 mb-0">Message Box                                  </h6>
                                        </li>
                                        <li>
                                            <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/1.jpg" alt />
                                                <div className="status-circle online" />
                                                <div className="media-body"><span>Erica Hughes</span>
                                                    <p>Lorem Ipsum is simply dummy...</p>
                                                </div>
                                                <p className="f-12 font-success">58 mins ago</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/2.jpg" alt />
                                                <div className="status-circle online" />
                                                <div className="media-body"><span>Kori Thomas</span>
                                                    <p>Lorem Ipsum is simply dummy...</p>
                                                </div>
                                                <p className="f-12 font-success">1 hr ago</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/4.jpg" alt />
                                                <div className="status-circle offline" />
                                                <div className="media-body"><span>Ain Chavez</span>
                                                    <p>Lorem Ipsum is simply dummy...</p>
                                                </div>
                                                <p className="f-12 font-danger">32 mins ago</p>
                                            </div>
                                        </li>
                                        <li className="text-center"> <a className="btn btn-primary" href="/#" data-bs-original-title title>View All   </a></li>
                                    </ul>
                                </li>
                                <li className="maximize"><a className="text-dark" href="/#!" onclick="javascript:toggleFullScreen()" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg></a></li>
                                <li className="profile-nav onhover-dropdown p-0 me-0">
                                    <div className="media profile-media"><img className="b-r-10" src="../assets/images/dashboard/profile.jpg" alt />
                                        <div className="media-body"><span>Emay Walter</span>
                                            <p className="mb-0 font-roboto">Admin <i className="middle fa fa-angle-down" /></p>
                                        </div>
                                    </div>
                                    <ul className="profile-dropdown onhover-show-div">
                                        <li><a href="/#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg><span>Account </span></a></li>
                                        <li><a href="/#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><span>Inbox</span></a></li>
                                        <li><a href="/#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg><span>Taskboard</span></a></li>
                                        <li><a href="/#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg><span>Settings</span></a></li>
                                        <li><a href="/#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1={15} y1={12} x2={3} y2={12} /></svg><span>Log in</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Header Ends                              */}
                {/* Page Body Start*/}
                <div className="page-body-wrapper horizontal-menu">
                    {/* Page Sidebar Start*/}
                    <div className="sidebar-wrapper">
                        <div>
                            <div className="logo-wrapper"><a href="index.html" data-bs-original-title title><img className="img-fluid for-light" src="../assets/images/logo/logo.png" alt /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt /></a>
                                <div className="back-btn"><i className="fa fa-angle-left" /></div>
                                <div className="toggle-sidebar" checked="checked"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid status_toggle middle sidebar-toggle"><rect x={3} y={3} width={7} height={7} /><rect x={14} y={3} width={7} height={7} /><rect x={14} y={14} width={7} height={7} /><rect x={3} y={14} width={7} height={7} /></svg></div>
                            </div>
                            <div className="logo-icon-wrapper"><a href="index.html" data-bs-original-title title><img className="img-fluid" src="../assets/images/logo/logo-icon.png" alt /></a></div>
                            <nav className="sidebar-main">
                                <div className="left-arrow disabled" id="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1={19} y1={12} x2={5} y2={12} /><polyline points="12 19 5 12 12 5" /></svg></div>
                                <div id="sidebar-menu">
                                    <ul className="sidebar-links" id="simple-bar" data-simplebar="init" style={{ display: 'block' }}><div className="simplebar-wrapper" style={{ margin: 0 }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: 0, bottom: 0 }}><div className="simplebar-content-wrapper" style={{ height: '100%', overflow: 'hidden' }}><div className="simplebar-content" style={{ padding: 0 }}>
                                        <li className="back-btn">
                                            <div className="mobile-back text-end"><span>Back</span><i className="fa fa-angle-right ps-2" aria-hidden="true" /></div>
                                        </li>
                                        <li className="sidebar-list"><a className="sidebar-link sidebar-title" href="../theme/index.html" target="_blank" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><span>Dashboard</span><div className="according-menu"><i className="fa fa-angle-right" /></div></a></li>
                                        <li className="sidebar-list"><a className="sidebar-link sidebar-title" href="/#" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-anchor"><circle cx={12} cy={5} r={3} /><line x1={12} y1={22} x2={12} y2={8} /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg><span>Starter kit</span><div className="according-menu"><i className="fa fa-angle-right" /></div></a>
                                            <ul className="sidebar-submenu" style={{ display: 'none' }}>
                                                <li><a className="submenu-title active" href="#" data-bs-original-title title>color version<span className="sub-arrow"><i className="fa fa-chevron-right" /></span><div className="according-menu"><i className="fa fa-angle-down" /></div></a>
                                                    <ul className="nav-sub-childmenu submenu-content" style={{ display: 'block' }}>
                                                        <li><a href="index.html" data-bs-original-title title>Layout Light</a></li>
                                                        <li><a href="layout-dark.html" className="active" data-bs-original-title title>Layout Dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>     <a className="submenu-title" href="/#" data-bs-original-title title>Page layout<span className="sub-arrow"><i className="fa fa-chevron-right" /></span><div className="according-menu"><i className="fa fa-angle-right" /></div></a>
                                                    <ul className="nav-sub-childmenu submenu-content" style={{ display: 'none' }}>
                                                        <li><a href="boxed.html" data-bs-original-title title>Boxed</a></li>
                                                        <li><a href="layout-rtl.html" data-bs-original-title title>RTL</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="hide-on-scroll.html" data-bs-original-title title><span>Hide menu on Scroll</span></a></li>
                                                <li>     <a className="submenu-title" href="/#" data-bs-original-title title>Footers<span className="sub-arrow"><i className="fa fa-chevron-right" /></span><div className="according-menu"><i className="fa fa-angle-right" /></div></a>
                                                    <ul className="nav-sub-childmenu submenu-content" style={{ display: 'none' }}>
                                                        <li><a href="footer-light.html" data-bs-original-title title>Footer Light</a></li>
                                                        <li><a href="footer-dark.html" data-bs-original-title title>Footer Dark</a></li>
                                                        <li><a href="footer-fixed.html" data-bs-original-title title>Footer Fixed</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-list"><a className="sidebar-link sidebar-title" href="http://support.pixelstrap.com/help-center" target="_blank" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-headphones"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg><span>Raise Support</span><div className="according-menu"><i className="fa fa-angle-right" /></div></a></li>
                                        <li className="sidebar-list"><a className="sidebar-link sidebar-title" href="../document/index.html" target="_blank" data-bs-original-title title><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg><span>Documentation</span><div className="according-menu"><i className="fa fa-angle-right" /></div></a></li>
                                    </div></div></div></div><div className="simplebar-placeholder" style={{ width: 'auto', height: 192 }} /></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ width: 0, display: 'none' }} /></div><div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ height: 0, display: 'none' }} /></div></ul>
                                </div>
                                <div className="right-arrow" id="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></div>
                            </nav>
                        </div>
                    </div>
                    {/* Page Sidebar Ends*/}
                    <div className="page-body">
                        <div className="container-fluid">
                            <div className="page-title">
                                <div className="row">
                                    <div className="col-6">
                                        <h3>Layout dark</h3>
                                    </div>
                                    <div className="col-6">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html" data-bs-original-title title>                                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></a></li>
                                            <li className="breadcrumb-item">Color version</li>
                                            <li className="breadcrumb-item active">Layout dark</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Container-fluid starts*/}
                        <div className="container-fluid">
                            <div className="row starter-main">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Kick start your project development !</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa-spin fa-cog" /></li>
                                                    <li><i className="view-html fa fa-code" /></li>
                                                    <li><i className="icofont icofont-maximize full-card" /></li>
                                                    <li><i className="icofont icofont-minus minimize-card" /></li>
                                                    <li><i className="icofont icofont-refresh reload-card" /></li>
                                                    <li><i className="icofont icofont-error close-card" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>Getting start with your project custom requirements using a ready template which is quite difficult and time taking process, Cuba Admin provides useful features to kick start your project development with no efforts !</p>
                                            <ul>
                                                <li>
                                                    <p>Cuba Admin provides you getting start pages with different layouts, use the layout as per your custom requirements and just change the branding, menu &amp; content.</p>
                                                </li>
                                                <li>
                                                    <p>Every components in Cuba Admin are decoupled, it means use only components you actually need! Remove unnecessary and extra code easily just by excluding the path to specific SCSS, JS file.</p>
                                                </li>
                                                <li>
                                                    <p>It use PUG as template engine to generate pages and whole template quickly using node js. Save your time for doing the common changes for each page (i.e menu, branding and footer) by generating template with pug.</p>
                                                </li>
                                            </ul>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head" title data-bs-original-title="Copy" aria-label="Copy"><i className="icofont icofont-copy-alt" /></button>
                                                <pre className=" language-html"><code className=" language-html" id="example-head"><span className="token comment" spellCheck="true">&lt;!-- Cod Box Copy begin --&gt;</span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Getting start with your project custom requirements using a ready template which is quite difficult and time taking process, Cuba Admin provides useful features to kick start your project development with no efforts !<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ul</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Cuba Admin provides you getting start pages with different layouts, use the layout as per your custom requirements and just change the branding, menu &amp; content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Every components in Cuba Admin are decoupled, it means use only components you actually need! Remove unnecessary and extra code easily just by excluding the path to specific SCSS, JS file.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>It use PUG as template engine to generate pages and whole template quickly using node js. Save your time for doing the common changes for each page (i.e menu, branding and footer) by generating template with pug.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ul</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token comment" spellCheck="true">&lt;!-- Cod Box Copy end --&gt;</span></code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>What is starter kit ?</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa-spin fa-cog" /></li>
                                                    <li><i className="view-html fa fa-code" /></li>
                                                    <li><i className="icofont icofont-maximize full-card" /></li>
                                                    <li><i className="icofont icofont-minus minimize-card" /></li>
                                                    <li><i className="icofont icofont-refresh reload-card" /></li>
                                                    <li><i className="icofont icofont-error close-card" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>Starter kit is a set of pages with different layouts, useful for your next project to start development process from scratch with no time.</p>
                                            <ul>
                                                <li>
                                                    <p>Each layout includes basic components only.</p>
                                                </li>
                                                <li>
                                                    <p>Select your choice of layout from starter kit, customize it with optional changes like colors and branding, add required dependency only.</p>
                                                </li>
                                                <li>
                                                    <p>Using template engine to generate whole template quickly with your selected layout and other custom changes. </p>
                                                </li>
                                            </ul>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head1" title data-bs-original-title="Copy" aria-label="Copy"><i className="icofont icofont-copy-alt" /></button>
                                                <pre className=" language-html"><code className=" language-html" id="example-head1"><span className="token comment" spellCheck="true">&lt;!-- Cod Box Copy begin --&gt;</span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Starter kit is a set of pages with different layouts, useful for your next project to start development process from scratch with no time. <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ul</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Each layout includes basic components only.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Select your choice of layout from starter kit, customize it with optional changes like colors and branding, add required dependency only.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Using template engine to generate whole template quickly with your selected layout and other custom changes.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ul</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token comment" spellCheck="true">&lt;!-- Cod Box Copy end --&gt;</span></code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>How to use starter kit ?</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa-spin fa-cog" /></li>
                                                    <li><i className="view-html fa fa-code" /></li>
                                                    <li><i className="icofont icofont-maximize full-card" /></li>
                                                    <li><i className="icofont icofont-minus minimize-card" /></li>
                                                    <li><i className="icofont icofont-refresh reload-card" /></li>
                                                    <li><i className="icofont icofont-error close-card" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p><span className="f-w-600">HTML</span></p>
                                            <p>If you know just HTML, select your choice of layout from starter kit folder, customize it with optional changes like colors and branding, add required dependency only.</p>
                                            <p><span className="f-w-600">PUG</span></p>
                                            <p>To use PUG it required node.js and basic knowledge of using it. Using PUG as template engine to generate whole template quickly with your selected layout and other custom changes. To getting start with PUG usage &amp; template generating process please refer template documentation.</p>
                                            <div className="alert alert-primary inverse" role="alert"><i className="icon-info-alt" />
                                                <h5>Tips!</h5>
                                                <p>Hideable navbar option is available for fixed navbar with static navigation only. Works in top and bottom positions, single and multiple navbars.</p>
                                            </div>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head2" title data-bs-original-title="Copy" aria-label="Copy"><i className="icofont icofont-copy-alt" /></button>
                                                <pre className=" language-html"><code className=" language-html" id="example-head2"><span className="token comment" spellCheck="true">&lt;!-- Cod Box Copy begin --&gt;</span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>f-w-600<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>HTML<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>If you know just HTML, select your choice of layout from starter kit folder, customize it with optional changes like colors and branding, add required dependency only.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>f-w-600<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>PUG<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>To use PUG it required node.js and basic knowledge of using it. Using PUG as template engine to generate whole template quickly with your selected layout and other custom changes. To getting start with PUG usage &amp; template generating process please refer template documentation.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert alert-primary inverse<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>i</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>icon-info-alt<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>i</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span><span className="token punctuation">&gt;</span></span>Tips!<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Hideable navbar option is available for fixed navbar with static navigation only. Works in top and bottom positions, single and multiple navbars.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>{"\n"}{"      "}<span className="token comment" spellCheck="true">&lt;!-- Cod Box Copy end --&gt;</span></code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Simple Card</h5>
                                        </div>
                                        <div className="card-body">
                                            <h6>HTML Ipsum Presents</h6>
                                            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                  semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean
                  fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="/#" data-bs-original-title title>Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
                </p>
                                            <h6>Header Level 2</h6>
                                            <ol>
                                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                                <li>Aliquam tincidunt mauris eu risus.</li>
                                            </ol>
                                            <div className="figure d-block">
                                                <blockquote className="blockquote">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada
                                                        tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
                    </p>
                                                </blockquote>
                                            </div>
                                            <h4>Header Level<span> 3</span></h4>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                                <li>Aliquam tincidunt mauris eu risus.</li>
                                            </ul>
                                            <pre>#header h1 a {"{"}{"\n"}{"        "}display: block;{"\n"}{"        "}width: 300px;{"\n"}{"        "}height: 80px;{"\n"}{"      "}{"}"}</pre>
                                            <dl>
                                                <dt>Definition list</dt>
                                                <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
                                                <dt>Lorem ipsum dolor sit amet</dt>
                                                <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>With Header</h5>
                                        </div>
                                        <div className="card-body">
                                            <h5>Content title</h5>
                                            <p>Add a heading to card with <code>.card-header</code> class</p>
                                            <p>You may also include any &lt;h1&gt;-&lt;h6&gt; with a <code>.card-header </code> &amp; <code>.card-title</code> class to add heading.</p>
                                            <p>Jelly beans sugar plum cheesecake cookie oat cake soufflé. Tart lollipop carrot cake sugar plum. Marshmallow wafer tiramisu jelly beans.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header card-no-border">
                                            <h5>With Header &amp; No Border</h5>
                                        </div>
                                        <div className="card-body">
                                            <h5>Content title</h5>
                                            <p>Add a heading to card with <code>.card-header </code> class &amp; without header border<code>.border-bottom-0</code> class.</p>
                                            <p>You may also include any &lt;h1&gt;-&lt;h6&gt; with a <code>.card-header </code> &amp; <code>.card-title</code> class to add heading.</p>
                                            <p>Gingerbread brownie sweet roll cheesecake chocolate cake jelly beans marzipan gummies dessert. Jelly beans sugar plum cheesecake cookie oat cake soufflé.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Container-fluid Ends*/}
                    </div>
                    {/* footer start*/}
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 footer-copyright text-center">
                                    <p className="mb-0">Copyright 2020 © Cuba theme by pixelstrap</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        );
    }

}