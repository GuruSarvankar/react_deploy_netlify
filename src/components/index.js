import React, {useEffect, useState} from "react";


const Index = () => {
    
    const[users, setUsers] = useState([]);

    const getUsers =async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }

    useEffect(() => {
        getUsers();
    }, [])

  

    return (
      
        <div className="container">
           <div className="row">

            {
                users.map((curElem) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
                            <div class="card user-card"  key={curElem.id}>
                                <div class="card-up"></div>
                                <div class="avatar mx-auto bg-white">
                                    <div className="avatar-text border border-1 rounded-circle ">{curElem.name}</div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{curElem.name}</h5>
                                    <p class="card-text">{curElem.username}</p>
                                    <a href="#!" className="card-link mt-3 text-danger">{curElem.email}</a>
                                    <div class="d-grid gap-2 mt-5">
                                        <a href="#!" class="btn-lg btn-primary">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            </div>
        </div>              


)
}

export default Index;
