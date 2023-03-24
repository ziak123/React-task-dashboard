import React from 'react';
import './Dashboard.css';
import  pers from '../Images/pers.png';
import { BiUpload, BiUserPlus } from 'react-icons/bi';
import {  HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { FaGraduationCap } from 'react-icons/fa';
import { MdFeed } from 'react-icons/md';
import { FaNetworkWired } from 'react-icons/fa'
import { BsCheck2Square, BsArrowRight } from 'react-icons/bs'
import {GoSearch} from 'react-icons/go';
import {AiOutlineCalendar} from 'react-icons/ai';
import {MdNotificationsNone} from 'react-icons/md';
import {MdKeyboardArrowRight} from  'react-icons/md';


const Dashboard = () => {
    return (
        <>
            <div className="topnav">
                <div className='d-flex '>
                    <a className="active text-success fs-5" href="#home"><span className='fw-bold'>Logo</span><br/>Here</a>
                </div>
                <div className='d-flex flex-row justify-items-center'>
                    <div className="dropdown">
                        <button className="btn transparent border border-dark btndrop dropdown-toggle px-4 py-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Spring 2021
                        </button>
                    </div>
                    <div className="vr px-3"></div>
                    <div>
                        <span className='reacticons px-3'><GoSearch size={33} style={{ paddingRight: '10px', paddingTop: '5px', color: 'green'  }} /></span>
                    </div>
                    <div>
                        <span className='reacticons px-2'><AiOutlineCalendar size={33} style={{ paddingRight: '5px', paddingLeft: '5px' , color: 'green' }} /></span>
                    </div>
                    <div>
                        <span className='reacticons px-3'><MdNotificationsNone size={36} style={{paddingLeft: '10px', color: 'green' }}/></span>
                    </div>
                    <div className="vr px-2 text-dark"></div>
                    <div className='d-flex flex-row justify-item-center'>
                        <div>
                            <img src={pers} alt="" width={35} height={35} style={{borderRadius: '25px'}}/>
                        </div>
                        <div className='d-flex flex-column px-2'>
                            <span className='logper'>Q. Zaman</span>
                            <span className='logper'>Vice Chancellor</span>
                        </div>
                        <div>
                            <span className='reacticons'><MdKeyboardArrowRight size={36} style={{paddingLeft: '10px' }}/></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="topnav2">
                <div className=''>
                    <span className='reacticons gap-2'><BiUserPlus size={25} />  Enrollment</span>
                </div>
                <div className=''>
                    <span className='reacticons gap-2'><HiOutlineBuildingLibrary size={20}  />  Department</span>
                </div>
                <div className=''>
                    <span className='reacticons gap-2'><FaGraduationCap size={20}  />  Degree</span>
                </div>
                <div className=''>
                    <span className=' reacticons gap-2 '><MdFeed size={20}  />  Fee Collection</span>
                </div>
                <div className=''>
                    <span className='reacticons2 gap-2'><FaNetworkWired size={20}  />  Faculties</span>
                </div>
                <div className=''>
                    <span className='reacticons gap-2'><BsCheck2Square size={20}  />  Pass-out Student</span>
                </div>
                <div className=''>
                    <span className='reacticons gap-2'><BiUpload size={20}  />  File Uploads</span> 
                </div>
                <div>
                    <span className='reacticons gap-2'><BsArrowRight size={18} style={{color: "green"}}/></span>
                </div>

            </div>
            {/* content */}
            <div className='section-content px-5 mb-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='graph'>

                                <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div className="text-center mx-5 small d-flex justify-content-center mt-auto justify-content-between">
                                        <div className='d-flex flex-column'>
                                            <div>
                                                <span className="mx-2">
                                                    <p className="fas fa-circle text-primary"></p> Total Faculties
                                                </span>
                                            </div>
                                            <div>
                                                <h1 className='text-success fw-bold fs-2'>35</h1>
                                            </div>
                                        </div>
                                        <div className="vr px-3"></div>
                                        <div className='d-flex flex-column'>
                                            <div>
                                                <span className="mx-2">
                                                    <p className="fas fa-circle text-primary"></p> Affiliated Faculties
                                                </span>
                                            </div>
                                            <div>
                                                <h1 className='text-warning fw-bold fs-2'>10</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='detail-list'>
                                <table className="table gap-3 tablerounded">
                                    <thead className='table-head gap-3'>
                                        <tr className='gap-3'>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Department Name</th>
                                            <th scope="col">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-body gap-3'>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Muhammad Zubair</td>
                                            <td>Affiliated</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Ahsan Manzoor</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-white py-3" style={{backgroundColor: "#ffffff"}}>
                <div className="text-center text-dark p-3" style={{backgroundColor: '#ffffff'}}>
                    <p style={{fontSize: '12px', color: 'gray'}}>Copyright © 2021 QuickLink(Pvt) Ltd. All Rights reserved</p>
                </div>
                </footer>
        </>
    )
}

export default Dashboard

