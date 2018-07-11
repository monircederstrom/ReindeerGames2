import React, { Component } from 'react';

class TableRow extends Component {
 render() {
   return (
       <tr>
         <td>
           {this.props.obj.data}
         </td>
       </tr>
   );
 }
}

export default TableRow;