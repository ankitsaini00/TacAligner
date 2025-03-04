import React,{Component, useEffect } from 'react';
import tacLogo from '../../img/tac-logo.png'
import { getUsers } from '../../actions/users'
import UserItem from './UserItem';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ExistingUser = ({ getUsers, user:{ users } }) => {
    useEffect(() => {
        getUsers()
    }, [getUsers])
    return (
        <div>
            <div class="main-menu">
        <header class="header">
            <a href="index.html" class="logo">
                <img src={tacLogo} alt="" />
            </a>
            <button type="button" class="button-close fa fa-times js__menu_close"></button>
            <div class="user">
                <a href="#" class="avatar"><img src="http://placehold.it/80x80" alt="" /><span class="status online"></span></a>
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
                    <li class="current">
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-flag"></i><span>User</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="/register-user">New</a></li>
                            <li><a href="/users-all">Existing</a></li>


                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-adjust"></i><span>Doctor</span>
                            <span class="menu-arrow fa fa-angle-down"></span>
                        </a>
                        <ul class="sub-menu js__content">
                        <li><a href="/register-doctor">New</a></li>
                            <li><a href="/doctors-all">Existing</a></li>
                            <li><a href="/doctor-login">Login</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Office Admin</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Accountant</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>CAD</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Planner</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Dentist</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                </ul>

            </div>
            {/* <!-- /.navigation --> */}
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /.main-menu --> */}

    <div class="fixed-navbar">
        <div class="pull-left">
            <button type="button" class="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
            <h1 class="page-title">Onboard Patients</h1>
            {/* <!-- /.page-title --> */}
        </div>
        {/* <!-- /.pull-left --> */}
        <div class="pull-right">
            <div class="ico-item">
                <a href="#" class="ico-item fa fa-search js__toggle_open" data-target="#searchform-header"></a>
                <form action="#" id="searchform-header" class="searchform js__toggle"><input type="search" placeholder="Search..." class="input-search" /><button class="fa fa-search button-search" type="submit"></button></form>
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
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span class="name">John Doe</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
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
                        <span class="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                        <span class="name">Jennifer</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span class="name">Michael Zenaty</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">50 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
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
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span class="name">Helen 987</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">Yesterday</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                        <span class="name">Denise Jenny</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">Oct, 28</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
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
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span class="name">John Doe</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span class="name">Harry Halen</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">15 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
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
                <div class="col-xs-12">
                    <div class="box-content">
                        <table id="example-edit" class="display" style={{width: 100 + '%'}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>City</th>
                                    <th>Address</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                {users.map(user => (
                                    <UserItem key={user._id} user={user} />
                                ))}
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-xs-12 --> */}
            </div>

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
    {/* <!--/#wrapper --> */}

    <div class="modal fade" id="boostrapModal-1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body">
                    <div class="row small-spacing">
                        <div class="col-md-3 col-xs-12">
                            <div class="box-content bordered primary margin-bottom-20">
                                <div class="profile-avatar">
                                    <img src="http://placehold.it/450x450" alt="" />
                                </div>

                            </div>
                            {/* <!-- /.box-content bordered --> */}


                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-md-3 col-xs-12 --> */}
                        <div class="col-md-9 col-xs-12">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="box-content card">
                                        <h4 class="box-title"><i class="fa fa-user ico"></i>Details</h4>
                                        {/* <!-- /.box-title --> */}

                                        {/* <!-- /.dropdown js__dropdown --> */}
                                        <div class="card-content">
                                            <div class="row">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>Tiger Nixon</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Number:</td>
                                                            <td>0123456789</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email:</td>
                                                            <td>doctor@mail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td>City:</td>
                                                            <td>Lorem</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>Lorem, Ipsum</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Clinic Name:</td>
                                                            <td>Lorem</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total Patients</td>
                                                            <td>20</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Onboarded Patients:</td>
                                                            <td>10</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                {/* <!-- /.col-md-6 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.card-content --> */}

                                    </div>
                                    {/* <!-- /.box-content card --> */}
                                </div>
                            </div>
                            {/* <!-- /.col-md-12 --> */}

                        </div>
                        {/* <!-- /.col-md-9 col-xs-12 --> */}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm waves-effect waves-light" data-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

ExistingUser.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user : state.user
})

export default connect(mapStateToProps, { getUsers })(ExistingUser)