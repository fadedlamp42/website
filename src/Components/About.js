import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio1 = this.props.data.bio[0];
      var bio2 = this.props.data.bio[1];
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Portrait of Peter Gomez" />
         </div>
         <div className="nine columns main-col">
            <div className='centered'>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/o5HOP7ZgCMo?start=597" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h2>About Me</h2>

            <p>{bio1}</p>
            <p>{bio2}</p>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}, {state} {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href={`mailto:{email}`}>{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" rel="noopener noreferrer" target="_blank"><i className="fa fa-file"></i>View Resume</a>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
