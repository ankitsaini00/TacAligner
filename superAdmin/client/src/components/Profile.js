import React from 'react'

export const Profile = () => {
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
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-adjust"></i><span>User Interface</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="ui-buttons.html">Buttons</a></li>
                            <li><a href="ui-cards.html">Cards</a></li>
                            <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                            <li><a href="ui-components.html">Components</a></li>
                            <li><a href="ui-draggable-cards.html">Draggable Cards</a></li>
                            <li><a href="ui-modals.html">Modals</a></li>
                            <li><a href="ui-notification.html">Notification</a></li>
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
                    <li class="current">
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
            <h1 class="page-title">Profile</h1>
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
            <div class="row small-spacing">
                <div class="col-md-3 col-xs-12">
                    <div class="box-content bordered primary margin-bottom-20">
                        <div class="profile-avatar">
                            <img src="http://placehold.it/450x450" alt=""/>
                            <a href="#" class="btn btn-block btn-friend"><i class="fa fa-check-circle"></i> Friends</a>
                            <a href="#" class="btn btn-block btn-inbox"><i class="fa fa-envelope"></i> Send Messages</a>
                            <h3><strong>Betty Simmons</strong></h3>
                            <h4>Owner at Our Company, Inc.</h4>
                            <p>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                        {/* <!-- .profile-avatar --> */}
                        <table class="table table-hover no-margin">
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td><span class="notice notice-danger">Active</span></td>
                                </tr>
                                <tr>
                                    <td>User Rating</td>
                                    <td><i class="fa fa-star text-warning"></i> <i class="fa fa-star text-warning"></i> <i class="fa fa-star text-warning"></i> <i class="fa fa-star text-warning"></i> <i class="fa fa-star text-warning"></i></td>
                                </tr>
                                <tr>
                                    <td>Member Since</td>
                                    <td>Jan 07, 2014</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- /.box-content bordered --> */}

                    <div class="box-content">
                        <h4 class="box-title"><i class="ico fa fa-users"></i>Friends</h4>
                        <ul class="profile-friends-list list-inline">
                            <li>
                                <a href="#" class="avatar"><img src="http://placehold.it/128x128" alt=""/></a>
                            </li>
                            <li>
                                <a href="#" class="avatar"><img src="http://placehold.it/128x128" alt=""/></a>
                            </li>
                            <li>
                                <a href="#" class="avatar"><img src="http://placehold.it/128x128" alt=""/></a>
                            </li>
                            <li>
                                <a href="#" class="avatar"><img src="http://placehold.it/128x128" alt=""/></a>
                            </li>
                            <li>
                                <a href="#" class="avatar"><img src="http://placehold.it/128x128" alt=""/></a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-md-3 col-xs-12 --> */}
                <div class="col-md-9 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box-content card">
                                <h4 class="box-title"><i class="fa fa-user ico"></i>About</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="card-content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>First Name:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Betty</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Last Name:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Simmons</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>User Name:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Betty</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Email:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">youremail@gmail.com</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>City:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Los Angeles</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Country:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">United States</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Birthday:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Jan 22, 1984</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Interests:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Basketball, Web, Design, etc.</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Website:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7"><a href="#">yourwebsite.com</a></div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Phone:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">+1-234-5678</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.card-content --> */}
                            </div>
                            {/* <!-- /.box-content card --> */}
                        </div>
                        {/* <!-- /.col-md-12 --> */}
                        <div class="col-md-6 col-xs-12">
                            <div class="box-content card">
                                <h4 class="box-title"><i class="fa fa-file-text ico"></i> Experience</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="card-content">
                                    <ul class="dot-list">
                                        <li><a href="#">Owner</a> at <a href="#">NinjaTeam</a>.<span class="date">March 2013 ~ Now</span></li>
                                        <li><a href="#">CEO</a> at <a href="#">CEO Company</a>.<span class="date"> March 2011 ~ February 2013</span></li>
                                        <li><a href="#">Web Designer</a> at <a href="#">Web Design Company Ltd.</a>.<span class="date"> March 2010 ~ February 2011</span></li>
                                        <li><a href="#">Sales</a> at <a href="#">Sales Company Ltd.</a>.<span class="date"> March 2009 ~ February 2010</span></li>
                                    </ul>
                                </div>
                                {/* <!-- /.card-content --> */}
                            </div>
                            {/* <!-- /.box-content card --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div class="col-md-6 col-xs-12">
                            <div class="box-content card">
                                <h4 class="box-title"><i class="fa fa-trophy ico"></i> Education</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="card-content">
                                    <ul class="dot-list">
                                        <li><a href="#">Students</a> at <a href="#">CEO Education</a>.<span class="date">March 2013 ~ Now</span></li>
                                        <li><a href="#">Students</a> at <a href="#">Web Design Education</a>.<span class="date">March 2011 ~ February 2013</span></li>
                                        <li><a href="#">Students</a> at <a href="#">Sales School</a>.<span class="date"> March 2010 ~ February 2011</span></li>
                                        <li><a href="#">Students</a> at <a href="#">High School</a>.<span class="date"> March 2009 ~ February 2010</span></li>
                                    </ul>
                                </div>
                                {/* <!-- /.card-content --> */}
                            </div>
                            {/* <!-- /.box-content card --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="box-content card">
                                <h4 class="box-title"><i class="fa fa-globe ico"></i> Activity</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="card-content">
                                    <ul class="notice-list">
                                        <li>
                                            <a href="#">
                                                <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                                                <span class="name">Betty Simmons</span>
                                                <span class="desc">There are new settings available</span>
                                                <span class="time">2 hours ago</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="avatar bg-success"><i class="glyphicon glyphicon-user"></i></span>
                                                <span class="name">New Signup</span>
                                                <span class="desc">There are new settings available</span>
                                                <span class="time">5 hours ago</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="avatar bg-warning"><img src="http://placehold.it/128x128" alt=""/></span>
                                                <span class="name">Settings</span>
                                                <span class="desc">There are new settings available</span>
                                                <span class="time">1 year ago</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="avatar bg-warning"><i class="fa fa-flag"></i></span>
                                                <span class="name">New Message received</span>
                                                <span class="desc">There are new settings available</span>
                                                <span class="time">1 day ago</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="avatar bg-pink"><i class="fa fa-gear"></i></span>
                                                <span class="name">Settings</span>
                                                <span class="desc">There are new settings available</span>
                                                <span class="time">1 year ago</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* <!-- /.notice-list --> */}
                                    <div class="text-center margin-top-20"><a href="#" class="btn btn-default">See All Activities <i class="fa fa-angle-double-right"></i></a></div>
                                </div>
                                {/* <!-- /.card-content --> */}
                            </div>
                            {/* <!-- /.box-content card --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div class="col-md-6 col-xs-12">
                            <div class="box-content card">
                                <h4 class="box-title"><i class="fa fa-flask ico"></i> Skill</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="card-content">
                                    <p>Photoshop</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: 40+"%"}}>
                                            <span class="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                    <p>Illustrator</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: 20+"%"}}>
                                            <span class="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                    <p>PHP</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60+"%"}}>
                                            <span class="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                    <p>Javascript</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 80+"%"}}>
                                            <span class="sr-only">80% Complete (danger)</span>
                                        </div>
                                    </div>
                                    <p>Communication</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 95+"%"}}>
                                            <span class="sr-only">95% Complete (success)</span>
                                        </div>
                                    </div>
                                    <p>Writing</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: 45+"%"}}>
                                            <span class="sr-only">45% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.card-content --> */}
                            </div>
                            {/* <!-- /.box-content card --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.col-md-9 col-xs-12 --> */}
            </div>
            {/* <!-- /.row small-spacing --> */}
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
