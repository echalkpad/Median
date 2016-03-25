var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/chatScreen.scss');

var ChannelHeader = require('layout/channelHeader.jsx');
var ChannelFooter = require('layout/channelFooter.jsx');

var ChatScreen = React.createClass({
    
	
    render: function(){
        return (
        <div className="screen-content">
        	<ChannelHeader />

        	<div className="channel-content md-scroll">
        	chat screen

                <a className="btn" onClick={this.showToast}>Toast!</a>


                The standard Lorem Ipsum passage, used since the 1500s

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham

                <div id="modal1" className="modal modal-fixed-footer">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
    </div>
  </div>

    <a className="modal-trigger waves-effect waves-light btn" href="#modal1">Modal</a>

        	</div>

            <ChannelFooter />

        </div>
    	);
    },

    showToast: function(){
        Materialize.toast('I am a toast', 4000);
    },

    componentDidMount: function(){
        $('.modal-trigger').leanModal();
    }
    
});

module.exports = ChatScreen;