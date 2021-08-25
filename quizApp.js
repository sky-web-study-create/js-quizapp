//変更①：問題文、回答欄、答えのすべてを1つの配列で管理
const quizData = [
  {'question' : '日本で一番長い川は何でしょうか？', 'answers': ['信濃川', '利根川', '石狩川'], 'correct': '信濃川'},
  {'question' : '長寿のお祝いで、88歳のことをなんという？', 'answers': ['喜寿', '米寿', '傘寿'], 'correct': '米寿'},
  {'question' : 'お寿司屋さんで「あおいそ」といえばなんのこと？', 'answers': ['会計', 'お茶', '醤油'], 'correct': '会計'},
  {'question' : '「からすみ」とは何の魚の卵のこと？', 'answers': ['ボラ', 'タラ', 'トビウオ'], 'correct': 'ボラ'},
  {'question' : '「森のバター」と呼ばれる野菜はなに？', 'answers': ['アボカド', 'ズッキーニ', '長いも'], 'correct': 'アボカド'},
  {'question' : '「森の宝石」と呼ばれる高級食材はなに？', 'answers': ['まつたけ', 'トリュフ', 'じゅんさい'], 'correct': 'トリュフ'},
  {'question' : '焼き鶏の砂肝はどの部分？', 'answers': ['胃袋', '肝臓', '心臓'], 'correct': '胃袋'},
  {'question' : '海上自衛隊が必ず金曜日に食べるものはなに？', 'answers': ['オムライス', 'カレー', 'シチュー'], 'correct': 'カレー'},
  {'question' : '日本の最南端の島の名前は？', 'answers': ['沖ノ鳥島', '与那国島', '波照間島'], 'correct': '沖ノ鳥島'},
  {'question' : '日本で一番大きい湖の名前は何でしょうか？', 'answers': ['琵琶湖', 'サロマ湖', '阿寒湖'], 'correct': '琵琶湖'}
];

const qText = document.getElementById('question');
const btn = document.getElementsByTagName('button');
let questionNo = 0;

//変更②：複数の要素(ボタン)にイベントを登録：ボタン生成後にボタン全てにイベントを割り振る
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
	button.addEventListener("click", function(e) {

      if(e.target.textContent === quizData[questionNo].correct){
        console.log(e.target.textContent, quizData[questionNo].correct);
        if(!alert('正解です。おめでとう！')){
          console.log('正解');
          //イベントのフォーカスを外す
          e.target.blur();
          dispQandA();
          return;
        };
      }else{
        console.log(e.target.textContent, quizData[questionNo].correct);
        alert('不正解です。もう一度チャレンジ！');
      }
	});
});

let dispQandA = () => {

    //問題文の表示
  questionNo = Math.floor(Math.random() * (quizData.length));
  console.log(questionNo);
  qText.textContent = quizData[questionNo].question;

  //解答選択肢の表示
  let answerIndex = 0;
  while(answerIndex < quizData[questionNo].answers.length){
    btn[answerIndex].textContent = quizData[questionNo].answers[answerIndex];
    answerIndex++;
  };
};

dispQandA();