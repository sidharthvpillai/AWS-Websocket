class Main extends Component {
  // instance of websocket connection as a class property
  ws = new WebSocket("wss://<add url here>");
  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");
    };
    this.ws.onmessage = (evt) => {
      //listen to data sent from the websocket server
      try {
        const message = JSON.parse(evt.data);
        this.setState({ dataFromServer: message });
        console.log(message);
      }
      catch {
        console.log('error in parsing')
      }
    };
    this.ws.onclose = () => {
      console.log("disconnected");
      // automatically try to connect on connection loss
    };
  }
  render() {
    <ChildComponent websocket={this.ws} />;
  }
}
