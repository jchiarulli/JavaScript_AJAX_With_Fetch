// qID, questionText, correctAnswer, studentAnswer, result

window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

// if (!window.indexedDB) {
//   alert();
// }

// if updating the database you can change the index number
let request = window.indexedDB.open("QuizQuestDatabase", 1),
  db,
  tx,
  store,
  index;

request.onupgradeneeded = function (e) {
  let db = request.result,
    store = db.createObjectStore("QuestionsStore", {
      keyPath: "qID",
    }),
    //   store = db.createObjectStore("QuestionsStore", { autoIncrement: true });
    index = store.createIndex("questionText", "questionText", {
      unique: false,
    });
};

request.onerror = function (e) {
  console.log("There was an error: " + e.target.errorCode);
};

request.onsuccess = function (e) {
  db = request.result;
  tx = db.transaction("QuestionStore", "readwrite");
  store = tx.objectStore("QuestionsStore");
  index = store.index("questionText");

  db.onerror = function (e) {
    console.log("ERROR" + e.target.errorCode);
  };

  store.put({
    qID: 1,
    questionText: "The sky is blue.",
    correctAnswer: true,
    studentAnswer: true,
    result: true,
  });

  store.put({
    qID: 2,
    questionText: "The grass is green.",
    correctAnswer: true,
    studentAnswer: true,
    result: true,
  });

  let q1 = store.get(1);
  let qs = index.get("The grass is green.");

  q1.onsuccess = function () {
    console.log(q1.result);
    console.log(q1.result.questionText);
  };

  qs.onsuccess = function () {
    console.log(qs.result.questionText);
  };

  tx.oncomplete = function () {
    db.close();
  };
};
