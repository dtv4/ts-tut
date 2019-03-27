import * as React from 'react';

export interface Props {
  name :string;
  eLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// interface State {
//   exst: number;
// }

function Hello({ name, eLevel = 1, onIncrement, onDecrement }: Props) {
  if (eLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getEx(eLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

// class HelloClass extends React.Component<Props, State> {
//   // constructor(props: Props){
//   //   super(props);
//   //   this.state = {exst: this.props.ex || 1};
//   // }

//   // onIncrement = () => this.updateEx(this.state.exst + 1);
//   // onDecrement = () => this.updateEx(this.state.exst - 1);

//   render() {
//     const {name} = this.props;

//     if (this.state.exst <= 0) {
//       throw new Error('negative');
//     }

//     return (
//       <div className="hello">
//         <div>
//           Hello {name + getEx(this.state.exst)}
//         </div>
//         <button onClick={onIncrement}> + </button>
//         <button onClick={onDecrement}> - </button>
//       </div>
//     );
//   }

//   updateEx(exst:number) {
//     this.setState({exst});
//   }
// }

export default Hello;
// export default Hello;

function getEx(ex:number) {
  console.log("ex", ex);
  return Array(ex + 1).join("!");
}