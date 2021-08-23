import React from 'react'
import Spinner from '../shared/Spinner'
import './deaths.css'
import { Link } from 'react-router-dom'
import gun from '../../img/gun.png'

const GetAllDeaths = ({loading,deaths}) => {
    return loading ? ( <Spinner /> ) : (
        <div className="container my-5"> 
                <div className="row">
                        {deaths.map((death) => (
                            <div className="col-4">
                            <div class=" h-75 full-withradius-death mb-5 shrink" >
                                <Link to={`/deaths/${death.death}`}>
                                        <div class="card-body">
                                        <div class="card-season"> <img src={gun} height="50" style={{borderRadius:50,marginTop:-7}}/> </div>
                                        <h4 class="card-title mb-4"><strong>Name:</strong> {death.death} </h4>
                                        <h6> <strong>Cause: </strong> {death.cause}</h6>
                                        <h6><strong>Responsible: </strong> {death.responsible}</h6>
                                        </div>
                                </Link>
                            </div>
                        </div>
                        ))}
                </div>
        </div>
    )
}
export default GetAllDeaths
