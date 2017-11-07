// import _ from 'lodash';
import SelectedOptions from '../db/mongo/models/selectedOptionsModel';
import nodemailerHelper from './nodemailerHelper'
import { controllers } from '../db';

const selectedOptionsController = controllers && controllers.selectedOptionsController;

// send email
export function sendEmail(req, res) {

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'mohammed.petiwala52@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>Click <a href="http://localhost:5000/sendquote">here</a> to send quote-2' // html body
  };

  nodemailerHelper(mailOptions);

  return res.json({
    message: "MAP this is working"
  })
}

export function sendQuote(req, res) {
  console.log("MAP sendQuote is working");

  controllers.selectedOptionsController.all(req, res).then((results) => {
    console.log("results", results);

  })
  // .then((res) => {

  //   console.log("res");
  // })
  // .catch((res) => {
  //   console.log("res");
  // })



  // const all = controllers.selectedOptionsController.all

  // all(req, res)
  //   .then((selectedOptions) => {

  //     let mailOptions = {
  //       from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
  //       to: 'mohammed.petiwala52@gmail.com', // list of receivers
  //       subject: 'Hello ✔', // Subject line
  //       text: selectedOptions[0].contactInfo.companyName, // plain text body
  //       html: selectedOptions[0].contactInfo.companyName // html body
  //     };

  //     nodemailerHelper(mailOptions)

//     return selectedOptions
//   });
}
