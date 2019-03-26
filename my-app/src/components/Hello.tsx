import * as React from 'react';

export interface Props {
  name :string;
  ex?: number;
}

interface State {
  exst: number;
}

// function Hello({name, ex = 1}: Props) {
//   return (
//     <div>
//       <div>
//         Hello {name + getEx(ex)}
//       </div>
//     </div>
//   );
// }

class HelloClass extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {exst: this.props.ex || 1};
  }

  onIncrement = () => this.updateEx(this.state.exst + 1);
  onDecrement = () => this.updateEx(this.state.exst - 1);

  render() {
    const {name} = this.props;

    if (this.state.exst <= 0) {
      throw new Error('negative');
    }

    return (
      <div className="hello">
        <div>
          Hello {name + getEx(this.state.exst)}
        </div>
        <button onClick={this.onIncrement}> + </button>
        <button onClick={this.onDecrement}> - </button>
      </div>
    );
  }

  updateEx(exst:number) {
    this.setState({exst});
  }
}

export default HelloClass;
// export default Hello;

function getEx(ex:number) {
  return Array(ex + 1).join("!");
}