
import React, {Component} from 'react'
import Checked from './images/cheked2.svg';
import Reject from './images/reject.png'
import Logo from './images/logo-pie-people.svg'
import './client.css';
import { Table, TableCell, TableBody,  TableHead, TableFooter,  TableRow,} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'





export default class Client extends Component{
    render(){
        return(
            <div className="portal">
                <div className="Rectangle">

                    <img src=  {Logo}  className="pie-logo" />
                </div>
                <div>
                <h1 className="client">Clients</h1>

                <Table className="title">
                    <TableHead >
                        <TableRow>
                            <TableCell className="company-name "><span>Company Name </span> <FontAwesomeIcon icon={faSort} className="icon" /></TableCell>
                            
                            <TableCell className="client-name" align="left"><span>Client Name</span> <FontAwesomeIcon icon={faSort}  className="icon"/> </TableCell>
                            <TableCell className="email" align="left"><span>Email</span> <FontAwesomeIcon  icon={faSort} className="icon"/> </TableCell>
                            <TableCell className="Phone-Number" align="left"><span>Phone Number</span>  <FontAwesomeIcon icon={faSort} className="icon" /> </TableCell>
                            <TableCell className="action" align="left"><span>Action </span> <FontAwesomeIcon icon={faSort} className="icon"/> </TableCell>
                            <TableCell className="reason" align="left"><span>Reason</span></TableCell>
                        </TableRow>
                    </TableHead> 

                    <TableFooter>
                            <TableRow>
                                <TableCell className="dis" align="left"><span>displaying </span></TableCell>
                                <TableCell  colSpan={4}><span className="to">25</span> <span className="out">Out Of</span><span className="hun">1300</span></TableCell>
                                <TableCell ><span className="hun">125-150 </span><span className="box5"><FontAwesomeIcon icon={faAngleLeft} className="icon-angle-left"/></span><span className="box4"><FontAwesomeIcon icon={faAngleRight} className="icon-angle-right"/></span></TableCell>
                            </TableRow>

                            
                        </TableFooter>
                    <TableBody>
                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span> </TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                                    <div className="box1" ><img className=" checked" src= {Checked} />
                                    <span className="text">Accept</span></div><div className="box2" ><img className=" reject" src= {Reject} /><span className="txt">Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="client-reason" align="left"><p></p></TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span></TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                                    <div className="box1" ><img className=" checked" src= {Checked} />
                                    <span className="text">Accept</span></div><div className="box2" ><img className=" reject" src= {Reject} /><span className="txt">Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="client-reason" align="left"><p></p></TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span></TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                               
                                    <div className="box3" >
                                        <span >Rejected</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="texas" align="left"><p>Texas tea Well were movin on up to the east side To a deluxe   <span>Read More</span></p></TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span></TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                                    <div className="box1" ><img className=" checked" src= {Checked} />
                                    <span className="text">Accept</span></div><div className="box2" ><img className=" reject" src= {Reject} /><span className="txt">Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="client-reason" align="left"><p></p></TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span></TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                               
                                    <div className="box3" >
                                        <span >Rejected</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="texas" align="left"><p>Texas tea Well were movin on up to the east side To a deluxe   <span>Read More</span></p></TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span></TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                                    <div className="box1" ><img className=" checked" src= {Checked} />
                                    <span className="text">Accept</span></div><div className="box2" ><img className=" reject" src= {Reject} /><span className="txt">Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="client-reason" align="left"><p></p></TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span></TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                               
                                    <div className="box3" >
                                        <span >Rejected</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="texas" align="left"><p>Texas tea Well were movin on up to the east side To a deluxe   <span>Read More</span></p></TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell  className="enterprise-name" component="th" scope="row"><span>DSK Solutions</span></TableCell>
                            <TableCell align="left" className="customer-name"> <span>David Warner</span> </TableCell>
                            <TableCell align="left"className="client-email"> <span> davidwarner@gmail.com</span></TableCell>
                            <TableCell align="left" className="client-phone"> <span>+919788118386 </span></TableCell>
                            <TableCell  align="left" className="cell"> 
                                <div className="flex" >
                                    <div className="box1" ><img className=" checked" src= {Checked} />
                                    <span className="text">Accept</span></div><div className="box2" ><img className=" reject" src= {Reject} /><span className="txt">Reject</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="client-reason" align="left"><p></p></TableCell>
                        </TableRow>
                       

                        
                        

                    </TableBody>

                </Table>
                
                </div>
                

            </div>
        )
    }
}

