import firebase from 'firebase'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { myFirebase, myFirestore } from '../../Config/MyFirebase'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.listUser = []
  }

  onLoginPress = async () => {


   
const result = await myFirestore.collection('career').get()

console.log('result.docs.length:',result.docs.length);
if (result.docs.length > 0) {
  this.listUser = [...result.docs]
}

/*
    const db = myFirebase.firestore();
    db.settings({experimentalForceLongPolling: true});

    let first = db.collection('career')
        .where('retrieveKey', '==', 'SoftwareWebsite')
        .limit(3);

    let paginate = first.get()
        .then((snapshot) => {

            let last = snapshot.docs[snapshot.docs.length - 1];
          
            console.log('last:',last);

            let itemArray = [];

            const items = snapshot.docs.map(doc =>

                itemArray.push(doc.data())

            );

            console.log('items:',items);

            let itemID = [];

             snapshot.forEach(doc => {
             itemID.push(doc.id);
             });

             console.log('itemID:',itemID);

            let tempCareerDet = [];

            let tempIndiObj;

            for (let increI =0;increI < itemArray.length; increI++ )
            {
            
                tempIndiObj = itemArray[increI];
         
                tempIndiObj.likeStyle = 'ion-thumbsup icon-small';
                tempIndiObj.id = itemID[increI];
                tempCareerDet.push(tempIndiObj);
            }

            console.log('tempCareerDet:',tempCareerDet);

        });

        */

        console.log('this.listUser:',this.listUser);
  }


  render() {
    return (
      <div className="viewRoot">
        <div className="header">CHAT DEMO</div>
        <button className="btnLogin" type="submit" onClick={this.onLoginPress}>
          SIGN IN ANONYMOUS
        </button>
      </div>
    )
  }
}

export default withRouter(Login)
