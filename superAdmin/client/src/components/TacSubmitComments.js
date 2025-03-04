import React from 'react'

export const TacSubmitComments = () => {
    return (
        <div>
            <div class="main-menu">
        <header class="header">
            <a href="index.html" class="logo">
                <img src="assets/images/tac-logo.png" alt=""/>
            </a>
            <button type="button" class="button-close fa fa-times js__menu_close"></button>
            <div class="user">
                <a href="#" class="avatar"><img src="http://placehold.it/80x80" alt=""/><span class="status online"></span></a>
                <h5 class="name"><a href="profile.html">Emily Stanley</a></h5>
                <h5 class="position">Administrator</h5>
                {/* <!-- /.name --> */}
                <div class="control-wrap js__drop_down">
                    <i class="fa fa-caret-down js__drop_down_button"></i>
                    <div class="control-list">
                        <div class="control-item"><a href="profile.html"><i class="fa fa-user"></i> Profile</a></div>
                        <div class="control-item"><a href="#"><i class="fa fa-gear"></i> Settings</a></div>
                        <div class="control-item"><a href="#"><i class="fa fa-sign-out"></i> Log out</a></div>
                    </div>
                    {/* <!-- /.control-list --> */}
                </div>
                {/* <!-- /.control-wrap --> */}
            </div>
            {/* <!-- /.user --> */}
        </header>
        {/* <!-- /.header --> */}
        <div class="content">

            <div class="navigation">
                <h5 class="title">Navigation</h5>
                {/* <!-- /.title --> */}
                <ul class="menu js__accordion">
                    <li>
                        <a class="waves-effect" href="index.html"><i class="menu-icon fa fa-home"></i><span>Dashboard</span></a>
                    </li>
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-flag"></i><span>Icons</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="icons-font-awesome-icons.html">Font Awesome</a></li>
                            <li><a href="icons-fontello.html">Fontello</a></li>
                            <li><a href="icons-material-icons.html">Material Design Icons</a></li>
                            <li><a href="icons-material-design-iconic.html">Material Design Iconic Font</a></li>
                            <li><a href="icons-themify-icons.html">Themify Icons</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li class="current active">
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-adjust"></i><span>User Interface</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="ui-buttons.html">Buttons</a></li>
                            <li><a href="ui-cards.html">Cards</a></li>
                            <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                            <li><a href="ui-components.html">Components</a></li>
                            <li><a href="ui-draggable-cards.html">Draggable Cards</a></li>
                            <li><a href="ui-modals.html">Modals</a></li>
                            <li class="current"><a href="ui-notification.html">Notification</a></li>
                            <li><a href="ui-range-slider.html">Range Slider</a></li>
                            <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
                            <li><a href="ui-treeview.html">Tree view</a></li>
                            <li><a href="ui-typography.html">Typography</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a class="waves-effect" href="widgets.html"><i class="menu-icon fa fa-code"></i><span>Widgets</span><span class="notice notice-yellow">6</span></a>
                    </li>
                </ul>
                {/* <!-- /.menu js__accordion --> */}
                <h5 class="title">Components</h5>
                {/* <!-- /.title --> */}
                <ul class="menu js__accordion">
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-bar-chart"></i><span>Charts</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="chart-3d.html">3D Charts</a></li>
                            <li><a href="chart-chartist.html">Chartist Charts</a></li>
                            <li><a href="chart-chartjs.html">Chartjs Chart</a></li>
                            <li><a href="chart-dynamic.html">Dynamic Chart</a></li>
                            <li><a href="chart-flot.html">Flot Chart</a></li>
                            <li><a href="chart-knob.html">Knob Chart</a></li>
                            <li><a href="chart-morris.html">Morris Chart</a></li>
                            <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                            <li><a href="chart-other.html">Other Chart</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a class="waves-effect" href="calendar.html"><i class="menu-icon fa fa-calendar"></i><span>Calendar</span></a>
                    </li>
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-th-large"></i><span>Forms</span><span class="notice notice-blue">7</span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="form-elements.html">General Elements</a></li>
                            <li><a href="form-advanced.html">Advanced Form</a></li>
                            <li><a href="form-fileupload.html">Form Uploads</a></li>
                            <li><a href="form-validation.html">Form Validation</a></li>
                            <li><a href="form-wizard.html">Form Wizard</a></li>
                            <li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
                            <li><a href="form-xeditable.html">X-editable</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-table"></i><span>Tables</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="tables-basic.html">Basic Tables</a></li>
                            <li><a href="tables-datatable.html">Data Tables</a></li>
                            <li><a href="tables-responsive.html">Responsive Tables</a></li>
                            <li><a href="tables-editable.html">Editable Tables</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                </ul>
                {/* <!-- /.menu js__accordion --> */}
                <h5 class="title">Additions</h5>
                {/* <!-- /.title --> */}
                <ul class="menu js__accordion">
                    <li>
                        <a class="waves-effect" href="profile.html"><i class="menu-icon fa fa-user"></i><span>Profile</span></a>
                    </li>
                    <li>
                        <a class="waves-effect" href="inbox.html"><i class="menu-icon fa fa-envelope"></i><span>Mail</span><span class="notice notice-danger">New</span></a>
                    </li>
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-file-text"></i><span>Page</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="page-starter.html">Starter Page</a></li>
                            <li><a href="page-login.html">Login</a></li>
                            <li><a href="page-register.html">Register</a></li>
                            <li><a href="page-recoverpw.html">Recover Password</a></li>
                            <li><a href="page-lock-screen.html">Lock Screen</a></li>
                            <li><a href="page-confirm-mail.html">Confirm Mail</a></li>
                            <li><a href="page-404.html">Error 404</a></li>
                            <li><a href="page-500.html">Error 500</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-folder-open"></i><span>Extra Pages</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="extras-contact.html">Contact list</a></li>
                            <li><a href="extras-email-template.html">Email template</a></li>
                            <li><a href="extras-faq.html">FAQ</a></li>
                            <li><a href="extras-gallery.html">Gallery</a></li>
                            <li><a href="extras-invoice.html">Invoice</a></li>
                            <li><a href="extras-maps.html">Maps</a></li>
                            <li><a href="extras-pricing.html">Pricing</a></li>
                            <li><a href="extras-projects.html">Projects</a></li>
                            <li><a href="extras-taskboard.html">Taskboard</a></li>
                            <li><a href="extras-timeline.html">Timeline</a></li>
                            <li><a href="extras-tour.html">Tour</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                </ul>
                {/* <!-- /.menu js__accordion --> */}
            </div>
            {/* <!-- /.navigation --> */}
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /.main-menu --> */}

    <div class="fixed-navbar">
        <div class="pull-left">
            <button type="button" class="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
            <h1 class="page-title">Notification</h1>
            {/* <!-- /.page-title --> */}
        </div>
        {/* <!-- /.pull-left --> */}
        <div class="pull-right">
            <div class="ico-item">
                <a href="#" class="ico-item fa fa-search js__toggle_open" data-target="#searchform-header"></a>
                <form action="#" id="searchform-header" class="searchform js__toggle"><input type="search" placeholder="Search..." class="input-search"/><button class="fa fa-search button-search" type="submit"></button></form>
                {/* <!-- /.searchform --> */}
            </div>
            {/* <!-- /.ico-item --> */}
            <div class="ico-item fa fa-arrows-alt js__full_screen"></div>
            {/* <!-- /.ico-item fa fa-fa-arrows-alt --> */}
            <div class="ico-item toggle-hover js__drop_down ">
                <span class="fa fa-th js__drop_down_button"></span>
                <div class="toggle-content">
                    <ul>
                        <li><a href="#"><i class="fa fa-github"></i><span class="txt">Github</span></a></li>
                        <li><a href="#"><i class="fa fa-bitbucket"></i><span class="txt">Bitbucket</span></a></li>
                        <li><a href="#"><i class="fa fa-slack"></i><span class="txt">Slack</span></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i><span class="txt">Dribbble</span></a></li>
                        <li><a href="#"><i class="fa fa-amazon"></i><span class="txt">Amazon</span></a></li>
                        <li><a href="#"><i class="fa fa-dropbox"></i><span class="txt">Dropbox</span></a></li>
                    </ul>
                    <a href="#" class="read-more">More</a>
                </div>
                {/* <!-- /.toggle-content --> */}
            </div>
            {/* <!-- /.ico-item --> */}
            <a href="#" class="ico-item fa fa-envelope notice-alarm js__toggle_open" data-target="#message-popup"></a>
            <a href="#" class="ico-item pulse"><span class="ico-item fa fa-bell notice-alarm js__toggle_open" data-target="#notification-popup"></span></a>
            <a href="#" class="ico-item fa fa-power-off js__logout"></a>
        </div>
        {/* <!-- /.pull-right --> */}
    </div>
    {/* <!-- /.fixed-navbar --> */}

    <div id="notification-popup" class="notice-popup js__toggle" data-space="75">
        <h2 class="popup-title">Your Notifications</h2>
        {/* <!-- /.popup-title --> */}
        <div class="content">
            <ul class="notice-list">
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">John Doe</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Anna William</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">15 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar bg-warning"><i class="fa fa-warning"></i></span>
                        <span class="name">Update Status</span>
                        <span class="desc">Failed to get available update data. To ensure the please contact us.</span>
                        <span class="time">30 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Jennifer</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Michael Zenaty</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">50 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Simon</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">1 hour</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar bg-violet"><i class="fa fa-flag"></i></span>
                        <span class="name">Account Contact Change</span>
                        <span class="desc">A contact detail associated with your account has been changed.</span>
                        <span class="time">2 hours</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Helen 987</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">Yesterday</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Denise Jenny</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">Oct, 28</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Thomas William</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">Oct, 27</span>
                    </a>
                </li>
            </ul>
            {/* <!-- /.notice-list --> */}
            <a href="#" class="notice-read-more">See more messages <i class="fa fa-angle-down"></i></a>
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /#notification-popup --> */}

    <div id="message-popup" class="notice-popup js__toggle" data-space="75">
        <h2 class="popup-title">Recent Messages<a href="#" class="pull-right text-danger">New message</a></h2>
        {/* <!-- /.popup-title --> */}
        <div class="content">
            <ul class="notice-list">
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">John Doe</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Harry Halen</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">15 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Thomas Taylor</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">30 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Jennifer</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Helen Candy</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Anna Cavan</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">1 hour ago</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar bg-success"><i class="fa fa-user"></i></span>
                        <span class="name">Jenny Betty</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">1 day ago</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Denise Peterson</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">1 year ago</span>
                    </a>
                </li>
            </ul>
            {/* <!-- /.notice-list --> */}
            <a href="#" class="notice-read-more">See more messages <i class="fa fa-angle-down"></i></a>
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /#message-popup --> */}
    <div id="wrapper">
        <div class="main-content">
            <div class="row row-inline-block small-spacing">
                <div class="col-xs-12">
                    <div class="box-content">
                        <div class="row">
                            <div class="col-md-4 col-xs-12">
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input id="title" type="text" class="form-control" placeholder="Enter a title ..." />
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="Enter a message ..."></textarea>
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="switch primary margin-top-30">
                                    <input type="checkbox" value="checked" id="closeButton"/>
                                    <label for="closeButton">Close Button</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="addBehaviorOnToastClick"/>
                                    <label for="addBehaviorOnToastClick">Add behavior on toast click</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="addBehaviorOnToastCloseClick"/>
                                    <label for="addBehaviorOnToastCloseClick">Add behavior on toast close button click</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="debugInfo"/>
                                    <label for="debugInfo">Debug</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="progressBar"/>
                                    <label for="progressBar">Progress Bar</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="rtl"/>
                                    <label for="rtl">Right-To-Left</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="preventDuplicates"/>
                                    <label for="preventDuplicates">Prevent Duplicates</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="addClear"/>
                                    <label for="addClear">Add button to force clearing a toast, ignoring focus</label>
                                </div>
                                {/* <!-- /.switch --> */}
                                <div class="switch primary">
                                    <input type="checkbox" value="checked" id="newestOnTop"/>
                                    <label for="newestOnTop">Newest on top</label>
                                </div>
                                {/* <!-- /.switch --> */}
                            </div>
                            {/* <!-- /.col-md-4 --> */}
                            <div class="col-md-2 col-xs-12">
                                <div id="toastTypeGroup">
                                    <div class="form-group">
                                        <label>Toast Type</label>
                                    </div>
                                    {/* <!-- /.form-group --> */}
                                    <div class="radio success">
                                        <input type="radio" name="toasts" id="radio-1" value="success" checked/>
                                        <label for="radio-1">Success</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio info">
                                        <input type="radio" name="toasts" id="radio-2" value="info"/>
                                        <label for="radio-2">Info</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio warning">
                                        <input type="radio" name="toasts" id="radio-3" value="warning"/>
                                        <label for="radio-3">Warning</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio danger">
                                        <input type="radio" name="toasts" id="radio-4" value="error"/>
                                        <label for="radio-4">Error</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                </div>
                                {/* <!-- #toastTypeGroup --> */}
                                <div id="positionGroup">
                                    <div class="form-group">
                                        <label>Position</label>
                                    </div>
                                    {/* <!-- /.form-group --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-5" value="toast-top-right" checked />
                                        <label for="radio-5">Top Right</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-6" value="toast-bottom-right"/>
                                        <label for="radio-6">Bottom Right</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-7" value="toast-bottom-left"/>
                                        <label for="radio-7">Bottom Left</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-8" value="toast-top-left"/>
                                        <label for="radio-8">Top Left</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-9" value="toast-top-full-width"/>
                                        <label for="radio-9">Top Full Width</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-10" value="toast-bottom-full-width"/>
                                        <label for="radio-10">Bottom Full Width</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-11" value="toast-top-center"/>
                                        <label for="radio-11">Top Center</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                    <div class="radio">
                                        <input type="radio" name="positions" id="radio-12" value="toast-bottom-center"/>
                                        <label for="radio-12">Bottom Center</label>
                                    </div>
                                    {/* <!-- /.radio --> */}
                                </div>
                                {/* <!-- /#positionGroup --> */}
                            </div>
                            {/* <!-- /.col-md-2 --> */}
                            <div class="col-md-3 col-xs-12">
                                <div class="form-group">
                                    <label for="showEasing">Show Easing</label>
                                    <input id="showEasing" type="text" class="form-control" value="swing" placeholder="swing, linear" />
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="form-group">
                                    <label for="hideEasing">Hide Easing</label>
                                    <input id="hideEasing" type="text" class="form-control" value="linear" placeholder="swing, linear" />
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="form-group">
                                    <label for="showMethod">Show Method</label>
                                    <input id="showMethod" type="text" class="form-control" value="fadeIn" placeholder="show, fadeIn, slideDown" />
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="form-group">
                                    <label for="hideMethod">Hide Method</label>
                                    <input id="hideMethod" type="text" class="form-control" value="fadeOut" placeholder="hide, fadeOut, slideUp" />
                                </div>
                                {/* <!-- /.form-group --> */}
                            </div>
                            {/* <!-- /.col-md-3 --> */}
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="showDuration">Show Duration</label>
                                    <input id="showDuration" type="text" class="form-control" value="300" placeholder="ms" />
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="form-group">
                                    <label for="hideDuration">Hide Duration</label>
                                    <input id="hideDuration" type="text" class="form-control" value="1000" placeholder="ms" />
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="form-group">
                                    <label for="timeOut">Time out</label>
                                    <input id="timeOut" type="text" class="form-control" value="5000" placeholder="ms" />
                                </div>
                                {/* <!-- /.form-group --> */}
                                <div class="form-group">
                                    <label for="extendedTimeOut">Extended time out</label>
                                    <input id="extendedTimeOut" type="text" class="form-control" value="1000" placeholder="ms" />
                                </div>
                                {/* <!-- /.form-group --> */}
                            </div>
                            {/* <!-- /.col-md-3 --> */}
                            <div class="col-xs-12 margin-top-30">
                                <button type="button" class="btn btn-primary btn-sm waves-effect waves-light" id="showtoast">Show Toast</button>
                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="cleartoasts">Clear Toasts</button>
                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="clearlasttoast">Clear Last Toast</button>
                                <pre id="toastrOptions" class="margin-top-20"></pre>
                            </div>
                            {/* <!-- /.col-md-12 --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-xs-12 --> */}
            </div>
            {/* <!-- /.row row-inline-block small-spacing --> */}
            <footer class="footer">
                <ul class="list-inline">
                    <li>
                        <script>
                            document.write(new Date().getFullYear())
                        </script> © The Aligner Company.
                    </li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </footer>
        </div>
        {/* <!-- /.main-content --> */}
    </div>
        </div>
    )
}
