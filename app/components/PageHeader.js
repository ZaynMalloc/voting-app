var React = require('react');
var styles = require('../styles');


var PageHeader = React.createClass({
  render: function () {
    return (

  <div className='jumbotron jumbotron-fluid'>
    <div className='container'>
       <h1 className='title' style={styles.centerText}>Voting App</h1>
       <div className='row'>
        <div className='col-sm-12'>
            <div className='text-center'>
                <button onClick={this.onItemClick} style={styles.button} href="/auth/facebook" className='btn btn-primary' type='submit'>
                <img style={styles.login} className='login' src='../app/image/FB-f-Logo__blue_29.png' width='20' />
                Sign In
                </button>
            </div>
        </div>
       </div>
    </div>
  </div>

    );
  }
});


module.exports = PageHeader;
