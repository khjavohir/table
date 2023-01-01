export default function Card({item}){


    return(
        <div className="ex1">
              <img src={item.img} alt="" />
              <p className="first-p">{item.title} </p>
              <div className="big-ex2">
                <div className="ex2"></div>
               <p className="second-p"><i>{item.desc}</i></p>
               <a className="second-a" href="#">{item.btn}</a>
              </div>
            </div>
    )
}