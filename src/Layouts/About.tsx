import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'

type childType = {
  text: string
}

export default function About() {
  return (
    <div className="container mx-auto px-4 mb-20">
      <h2 className="font-bold text-3xl mb-5">About</h2>
      <p className='font-semibold text-sm mb-20'>
        初めまして。<br />
        Kanonという空想の名前で活動しています。<br />
        中学1年生の頃にゲームの内部を弄る経緯でプログラムと出会い、4年制のIT専門学校に入学しました。<br />
        その学校で、無力な自分でもWEBサイトを制作出来た事に感動し、WEB業界に専攻することに決めました。<br />
        気づけばプログラムを初めて6年が経過しており、様々な環境の変化を楽しみながら「趣味」として「仕事」としてWEB業界に従事しております。<br />
        他の趣味としては「絵」「筋トレ」「作曲」で、最近は絵に力を入れております。<br />
        
        <br />
        ここまでお読みいただきありがとうございました。<br />
        一緒に仕事をする上でよく聞かれる事を下記にてまとめましたので、是非ご一読下さい。
      </p>

      <h3 className="font-bold text-3xl mb-5">Q<span className='text-base'> & </span>A</h3>
      <Question text={`何故専門学校に入学したの？`} />
      <Answer text={`漠然とIT系統の職に就くと考えたからです\n自分の興味ある科目を受講したり、課題が提出されるので楽しかったです\nもっと専門学校へ行く道も推奨されて良いと思います`} />
      <Question text={`WEB制作学科なのに何故バックエンドもできるの？`} />
      <Answer text={`当時はフロントエンド側があまり難しくない分野と考えており、ライバルと差をつけるにはどうしたら良いか、という事で独学でPHPを学び始めたきっかけです\n今ではバックエンドの方が自信があります`} />
      <Question text={`何で会社一年未満で辞めたの？`} />
      <Answer text={`もっとレベルの高い環境に移りたい思いと、レベルに応じて正当に評価して頂ける環境を求め、案件のキリが良いタイミングで退職を決意しました`} />
      <Question text={`希望年収は？`} />
      <Answer text={`上流工程も含めるなら500万円、下流工程のみなら400万円になります\nあくまで「希望」です、評価に値しないのなら年収を下げて頂いて構いません`} />
      <Question text={`何でフルリモートで働きたいの？`} />
      <Answer text={`通勤には「時間」以外にも「気候」「事象」等様々な要因で時間の浪費や生産性の低下に繋がります\nまた、社員全員に適応した職場環境を整えるのも限界があります\nその点リモートワークはそれらを簡単に解決できる方法だからです\nもちろんコミュニケーションは大切だと理解しているので、月一回のオフラインイベント等はあってもいいと思います`} />
      <Question text={`今後何したい？`} />
      <Answer text={`WEBを中心としたプログラム言語の習得（Python、Go）、絵と作曲の本格化です`} />
    </div>
  )
}

const Question = (props:childType) => {
  return (
    <div className='flex mb-3'>
      <div className='flex justify-center items-center mr-2'>
        <AiOutlineQuestionCircle className='w-6 h-6 text-red-600' />
      </div>
      <div className='flex items-center h-full'>
        <p className='font-semibold text-sm text-red-600'>{ props.text }</p>
      </div>
    </div>
  )
}

const Answer = (props:childType) => {
  return (
    <div className='flex mb-3'>
      <div className='flex justify-center items-center mr-2'>
        <AiOutlineCheckCircle className='w-6 h-6 text-green-600' />
      </div>
      <div className='flex items-center h-full'>
        <p className='font-semibold text-sm whitespace-pre-line'>{ props.text }</p>
      </div>
    </div>
  )
}