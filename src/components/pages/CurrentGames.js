import React, { Component } from 'react';

class CurrentGames extends Component {
 render() {
   return (
       <tr>
         <td>
           {this.props.obj}
         </td>
       </tr>
   );
 }
}

export default CurrentGames;