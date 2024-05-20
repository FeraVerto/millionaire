import mks from './../static/image/mojsemen.jpg';
import sam from './../static/image/samec..jpg';
import vhe from './../static/image/vahue.jpg';
import ihv from './../static/image/ihwill.png';
import chin from './../static/image/chinazes.jpg';
import tin from './../static/image/tinkoff.jpg';
import chm from './../static/image/4monja.jpg';
import pan from './../static/image/deshevka.jpg';
import hm from './../static/image/threeHbuks.jpg';
import nat from './../static/image/natasha.jpg';
import krek from './../static/image/idukreke.jpg';
import pur from './../static/image/kotletki.png';
import kan from './../static/image/kanevskij.jpeg';
import ryb from './../static/image/rybov.jpg';
import suh from './../static/image/syhnost.jpg';

const GET_NEXT_QUESTION = 'millionaire/bodyGame/GET_NETX_QUESTION';
const RESET_SCORE = 'millionaire/bodyGame/RESET_SCORE';
const TOGGLE_IS_ACTIVE = 'millionaire/bodyGame/TOGGLE_IS_ACTIVE';

type ActonType = any;
type initialStateType = typeof initialState;

let initialState = {
  stateScore: [
    500, 1000, 2000, 3000, 5000, 10000, 15000, 25000, 50000, 100000, 200000,
    400000, 800000, 1500000, 3000000,
  ],
  totalScore: 0,
  i: 0,
  questionBlock: {
    isActive: true,
    questions: [
      {
        text: 'Что сказал ведущий?',
        image: mks,
        score: 1000,
        answers: [
          {
            text: 'Спасибо Семён. Мой коллега Семён Закружный',
            isRight: false,
          },
          {
            text: 'Спасибо, коллега, а теперь к другим новостям',
            isRight: false,
          },
          {
            text: 'Спасибо Семён, мой Семён...',
            isRight: true,
          },
          {
            text: 'Мой Колодя',
            isRight: false,
          },
        ],
      },
      {
        text: 'Из какого фильма мем?',
        score: 5000,
        image: sam,
        answers: [
          {
            text: 'Кабельщик',
            isRight: false,
          },
          {
            text: 'Полночь в Париже',
            isRight: false,
          },
          {
            text: 'Персонаж',
            isRight: false,
          },
          {
            text: 'Образцовый самец',
            isRight: true,
          },
        ],
      },
      {
        text: 'Крылатая фраза из этого мема',
        score: 10000,
        image: vhe,
        answers: [
          {
            text: 'Я в ахуе, давай!',
            isRight: true,
          },
          {
            text: 'Стартуем!',
            isRight: false,
          },
          {
            text: 'Получилось с первого раза!',
            isRight: false,
          },
          {
            text: 'Жопа слипнется',
            isRight: false,
          },
        ],
      },
      {
        text: 'Как зовут танцора?',
        score: 10000,
        image: ihv,
        answers: [
          {
            text: 'Их Бин Вульф',
            isRight: false,
          },
          {
            text: 'Же Нэ Па ',
            isRight: false,
          },
          {
            text: 'Волк Вциркевыступаевич',
            isRight: false,
          },
          {
            text: 'Их Виль Нихт',
            isRight: true,
          },
        ],
      },
      {
        text: 'Как с английского переводится слово чиназес?',
        score: 1000,
        image: chin,
        answers: [
          {
            text: 'Нет такого слова',
            isRight: true,
          },
          {
            text: 'Удовольствие',
            isRight: false,
          },
          {
            text: 'Одобрение',
            isRight: false,
          },
          {
            text: 'Сюда',
            isRight: false,
          },
        ],
      },
      {
        text: 'Какую фразу НЕ говорил Тиньков?',
        score: 5000,
        image: tin,
        answers: [
          {
            text: 'Какое-то величие, какая-то хуйня. Мне вообще они не интересны.',
            isRight: false,
          },
          {
            text: 'Ну это пиздец какой-то просто, ну сколько можно.',
            isRight: false,
          },
          {
            text: 'Я говорю: давай по-новой, Миша, всё хуйня',
            isRight: true,
          },
          {
            text: 'Сомнительно, но Окэээй',
            isRight: false,
          },
        ],
      },
      {
        text: 'Как зовут котенка?',
        score: 10000,
        image: chm,
        answers: [
          {
            text: 'Роня',
            isRight: false,
          },
          {
            text: 'Боня',
            isRight: false,
          },
          {
            text: 'Соня',
            isRight: false,
          },
          {
            text: 'Чмоня',
            isRight: true,
          },
        ],
      },
      {
        text: 'Ты заметил, что маэстро Евгений Панасенков смотрит на тебя так. Кто ты?',
        score: 10000,
        image: pan,
        answers: [
          {
            text: 'Добыча',
            isRight: false,
          },
          {
            text: 'Дешевка',
            isRight: true,
          },
          {
            text: 'Предмет вожделения',
            isRight: false,
          },
          {
            text: 'Богач',
            isRight: false,
          },
        ],
      },
      {
        text: 'Сколько стоит услуга?',
        score: 1000,
        image: hm,
        answers: [
          {
            text: 'two hundred bucks',
            isRight: false,
          },
          {
            text: 'ten thousand bucks',
            isRight: false,
          },
          {
            text: 'three hundred bucks',
            isRight: true,
          },
          {
            text: 'free',
            isRight: false,
          },
        ],
      },
      {
        text: 'Как тебя зовут?',
        score: 5000,
        image: nat,
        answers: [
          {
            text: 'Саша',
            isRight: false,
          },
          {
            text: 'Наташа',
            isRight: true,
          },
          {
            text: 'Даша',
            isRight: false,
          },
          {
            text: 'Маша',
            isRight: false,
          },
        ],
      },
      {
        text: 'Куда он идет?',
        score: 10000,
        image: krek,
        answers: [
          {
            text: 'К реке',
            isRight: true,
          },
          {
            text: 'Домой',
            isRight: false,
          },
          {
            text: 'В закат',
            isRight: false,
          },
          {
            text: 'В никуда',
            isRight: false,
          },
        ],
      },
      {
        text: 'С чем котлетки?',
        score: 10000,
        image: pur,
        answers: [
          {
            text: 'С водочкой',
            isRight: false,
          },
          {
            text: 'С макарошками',
            isRight: false,
          },
          {
            text: 'С пюрешкой',
            isRight: true,
          },
          {
            text: 'С рисом',
            isRight: false,
          },
        ],
      },
      {
        text: 'Продолжи фразу: займусь спортом в этом году!',
        score: 1000,
        image: kan,
        answers: [
          {
            text: 'И занялся',
            isRight: false,
          },
          {
            text: 'И устроюсь на работу фитнес инструктором',
            isRight: false,
          },
          {
            text: 'Обязательно',
            isRight: false,
          },
          {
            text: 'Никто конечно не занялся',
            isRight: true,
          },
        ],
      },
      {
        text: 'Вы рыбов продаете?',
        score: 5000,
        image: ryb,
        answers: [
          {
            text: 'Нет просто показываю',
            isRight: true,
          },
          {
            text: 'Да продаю',
            isRight: false,
          },
          {
            text: 'Уходите нечего тут глазеть!',
            isRight: false,
          },
          {
            text: 'Котам не продаю',
            isRight: false,
          },
        ],
      },
      {
        text: 'Тебя выгоняют из бабки. Кто ты?',
        score: 10000,
        image: suh,
        answers: [
          {
            text: 'Глист',
            isRight: false,
          },
          {
            text: 'Альцгеймер',
            isRight: false,
          },
          {
            text: 'Вредная привычка',
            isRight: false,
          },
          {
            text: 'Сущность в виде гномика',
            isRight: true,
          },
        ],
      },
    ],
  },
};

const bodyGameReducer = (
  state = initialState,
  action: ActonType
): initialStateType => {
  switch (action.type) {
    case GET_NEXT_QUESTION:
      return {
        ...state,
        i: state.i + 1,
        totalScore: (state.totalScore +=
          state.questionBlock.questions[state.i].score),
      };

    case RESET_SCORE:
      return {
        ...state,
        i: 0,
        totalScore: 0,
        questionBlock: {
          ...state.questionBlock,
          isActive: false,
        },
      };

    case TOGGLE_IS_ACTIVE:
      return {
        ...state,
        questionBlock: {
          ...state.questionBlock,
          isActive: true,
        },
      };

    default:
      return state;
  }
};

export const getNextQuestionAC = () => ({ type: GET_NEXT_QUESTION });

export const resetScoreAC = () => ({ type: RESET_SCORE });

export const toggleIsActiveAC = () => ({ type: TOGGLE_IS_ACTIVE });

export default bodyGameReducer;
