const question = [
  '日本で一番長い川は何でしょうか？',
  '長寿のお祝いで、88歳のことをなんという？',
  'お寿司屋さんで「あおいそ」といえばなんのこと？',
  '「からすみ」とは何の魚の卵のこと？',
  '「森のバター」と呼ばれる野菜はなに？',
  '「森の宝石」と呼ばれる高級食材はなに？',
  '焼き鶏の砂肝はどの部分？',
  '海上自衛隊が必ず金曜日に食べるものはなに？',
  '日本の最南端の島の名前は？',
  '日本で一番大きい湖の名前は何でしょうか？'
];

const answers = [
  ['信濃川', '利根川', '石狩川'],
  ['喜寿', '米寿', '傘寿'],
  ['会計', 'お茶', '醤油'],
  ['ボラ', 'タラ', 'トビウオ'],
  ['アボカド', 'ズッキーニ', '長いも'],
  ['まつたけ', 'トリュフ', 'じゅんさい'],
  ['胃袋', '肝臓', '心臓'],
  ['オムライス', 'カレー', 'シチュー'],
  ['沖ノ鳥島', '与那国島', '波照間島'],
  ['琵琶湖', 'サロマ湖', '阿寒湖']
];

const corrects = [
  '信濃川',
  '米寿',
  '会計',
  'ボラ',
  'アボカド',
  'トリュフ',
  '胃袋',
  'カレー',
  '沖ノ鳥島',
  '琵琶湖'
];

let QuestionNo = 0;
let answerIndex = 0;
let correctCount = 0;
const qText = document.getElementById('question');
const button = document.getElementsByTagName('button');

let dispQandA = () => {

  //問題文の表示
  questionNo = Math.floor(Math.random() * (question.length));
  console.log(questionNo);
  qText.textContent = question[questionNo];

  //解答選択肢の表示
  let answerIndex = 0;
  while(answerIndex < answers[questionNo].length){
    button[answerIndex].textContent = answers[questionNo][answerIndex];

    button[answerIndex].addEventListener('click', function(e) {
      if(e.target.innerText === corrects[questionNo]){
        console.log(e.target.innerText, corrects[questionNo]);
        alert('正解です。おめでとう！');
        //ページをリロードして新しいクイズを表示
        location.reload();
      }else{
        console.log(e.target.innerText, corrects[questionNo]);
        alert('不正解です。もう一度チャレンジ！');
      }
    });

    answerIndex++;
  };
};

dispQandA();