//
//Gmail app (object (dict) of arrays!  )
//  Boxes (Array of Objects)
//    Primary (primitive string)
//      read (string )
//      unread
//      starred
//    Social
//      read
//      unread
//      starred
//    Promos
//      read
//      unread
//      starred
// 
//  Contacts (array of objects)
//    Shane (string)
//    Eric
//    Katy
//
//  Emails (array of objects)
//    senders
//      subject
//      status

 var appData = {
    name: "Gmail",
    boxNames: [
    
      {name: "Primary", messageStatus: ["read", "unread", "starred"]},
      {name: "Social", messageStatus: ["read", "unread", "starred"]},
      {name: "Promos", messageStatus: ["read", "unread", "starred"]},
    
    ],

    contacts: [

      {name: "Shane", lastMessage: "Hey man"},
      {name: "Katy", lastMessage: "What's for lunch?"},

    ],

    emails: [
      {sender: "TTS", subject: "welcome to class", status: "read"},
      {sender: "RPM management", subject: "tenant request", status: "unread"}
    ]
}

//Get list of Inboxes
inboxNames = []
boxes = appData.boxNames
console.log(boxes)

for (var i = 0; i < boxes.length; i++) {
  inboxNames.push(appData.boxNames[i].name)
}
console.log(inboxNames)

//Get list of messages
chatMessages = []
chats = appData.contacts
console.log(chats)

for (var i = 0; i < chats.length; i++) {
  console.log(appData.contacts[i].lastMessage)
}
//only get second chat message
for (var i = 0; i < chats.length; i++) {
  if (i == 1) {
    console.log(appData.contacts[i].lastMessage)
  }
}

//change read emails to starred status
starredMessages = []
emailMessages = appData.emails
for(var i = 0; i < emailMessages.length; i++) {
  if(appData.emails[i].status == "read") {
    appData.emails[i].status = "starred"
    starredMessages.push(appData.emails[i])
    console.log(starredMessages)
  }
}