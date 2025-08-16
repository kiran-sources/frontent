import React from 'react';

function Team() {
    const teamMembers = [
        {
            name: "John Doe",
            position: "CEO & Founder",
            image: "/media/team/member1.jpg",
            bio: "15+ years of experience in financial markets"
        },
        {
            name: "Jane Smith",
            position: "Chief Technology Officer",
            image: "/media/team/member2.jpg",
            bio: "Former tech lead at major trading platforms"
        },
        {
            name: "Mike Johnson",
            position: "Head of Operations",
            image: "/media/team/member3.jpg",
            bio: "Expert in risk management and compliance"
        }
    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Our Leadership Team</h2>
            <div className="row">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={member.image} className="card-img-top" alt={member.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text text-muted">{member.position}</p>
                                <p className="card-text">{member.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;