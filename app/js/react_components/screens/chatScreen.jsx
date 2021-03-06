var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/chatScreen.scss');

var ChannelHeader = require('layout/channelHeader.jsx');
var ChannelFooter = require('layout/channelFooter.jsx');

var ChatMessages = require('containers/chatMessages.jsx');

import { connect } from 'react-redux'

var ChatScreen = React.createClass({
    
	getDefaultProps: function(){
        return {
            hasSideContent: false
        }
    },

    render: function(){

        var channelID = this.props.routeParams.channelID;

        var name;
        var members;
        var description;

        if (channelID != null){
            var channel = this.props.channels[channelID];
            if (channel !== null && channel !== undefined){
                name = channel.name;
                members = 1;
                description = channel.description;
            }
        }

        return (
        <div className="screen-content">
        	<ChannelHeader channelID={channelID} channelName={name} members={members} channelDescription={description}/>

            <div className="channel-content-container">
            	<div className="channel-primary-content">
                    <div className="channel-content md-scroll">
                	   
                        <ChatMessages channelID={channelID}/>
                    </div>

                    {/*FOOTER IS BOUND TO PRIMARY CONTENT*/}
                    <ChannelFooter channelID={channelID}/>
                </div>

                {this.renderSideContent()}
            </div>

        </div>
    	);
    },

    renderSideContent: function(){
        if (this.props.hasSideContent){
            return (
                <div className="channel-side-content md-scroll">
                    side content
                </div>
            );
        }
    },

    showToast: function(){
        Materialize.toast('I am a toast', 4000);
    },

    componentDidMount: function(){
        $('.modal-trigger').leanModal();
    }
    
});

//module.exports = ChatScreen;

var mapStateToProps = function(state){
    return {channels:state.channels, user: state.user};
};

module.exports = connect(
  mapStateToProps
)(ChatScreen)