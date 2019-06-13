class Quotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
           randomIndex: ''
           }
    this.suivant = this.suivant.bind(this);
    }
  

suivant(){
this.setState ( {
  randomIndex: Math.floor(Math.random() * 16)
});
  }
componentWillMount(){
  this.setState({
        randomIndex: Math.floor(Math.random() * 16)
      });
}
  componentDidMount() {
    setInterval( () => {
      this.setState({
        randomIndex: Math.floor(Math.random() * 16)
      });
    }, 14500);
  }

  render() { 
     const quote = [
       {text:"The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
       author:" Tom Cargill"},
       {text:"In order to understand recursion, one must first understand recursion.",
       author:"Auteur inconnu"},
       {author:"Bjarne Stroustrup",
       text:"I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone."},
       {author:"Mitch Ratcliffe",
       text:"A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila."},
       {author:"C.A.R. Hoare",
       text:"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},
       {author:"Auteur inconnu",
       text:"The gap between theory and practice is not as wide in theory as it is in practice."},
       {author:"Gerald Weinberg",
       text:"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization."},
       {author:"Edsger Dijkstra",
       text:"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},
       {author:"Bill Gates",
       text:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},
       {author:"Fred Brooks",
       text:"Nine people can’t make a baby in a month."},
       {author:"Rich Cook",
       text:"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning." },
       {author:"Jeremy S. Anderson",
       text:"There are two major products that come out of Berkeley: LSD and UNIX. We don’t believe this to be a coincidence." },
       {author:"Ralph Johnson",
       text:"Before software can be reusable it first has to be usable." }
];
    const texte = quote[this.state.randomIndex].text
    const auteur = quote[this.state.randomIndex].author
    return (
      <div id="quote-box">
        
        <div id="text"><h1>{texte}</h1>
        </div>
        <div id="author">{auteur}
        </div>
        <button id="new-quote" onClick={this.suivant}>Suivante
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote"><i class="fa fa-twitter fa-4x"></i>
        </a>
      </div>

    );
  }
};

ReactDOM.render(<Quotation />,document.getElementById('root'));
