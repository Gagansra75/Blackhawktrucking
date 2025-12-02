import React, { useState } from 'react';
import { teamMembers } from '../teamData';

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const departments = {
    leadership: teamMembers.filter(m => ['CEO & Founder', 'Operations Director', 'Technology Director'].includes(m.role)),
    operations: teamMembers.filter(m => ['Fleet Manager', 'Safety Director', 'Warehouse Manager', 'Logistics Coordinator'].includes(m.role)),
    support: teamMembers.filter(m => ['Customer Success Manager', 'HR Director', 'Marketing Director', 'Sustainability Coordinator'].includes(m.role)),
    drivers: teamMembers.filter(m => m.role.includes('Driver'))
  };

  return (
    <div className="team-page">
      <div className="team-page-header">
        <h1>👥 Meet Our Team</h1>
        <p>The people behind our success</p>
      </div>

      <div className="team-intro">
        <div className="team-intro-content">
          <h2>We're More Than Just Truckers</h2>
          <p>
            At Blackhawk Trucking, our team is our greatest asset. From experienced drivers to dedicated support staff,
            every member plays a crucial role in delivering excellence. We're proud to have assembled a team of professionals
            who share our commitment to safety, reliability, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="team-section">
        <h2 className="section-title">Leadership Team</h2>
        <div className="team-grid">
          {departments.leadership.map(member => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Operations Team */}
      <div className="team-section">
        <h2 className="section-title">Operations & Logistics</h2>
        <div className="team-grid">
          {departments.operations.map(member => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Support Team */}
      <div className="team-section">
        <h2 className="section-title">Support & Services</h2>
        <div className="team-grid">
          {departments.support.map(member => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Drivers */}
      <div className="team-section">
        <h2 className="section-title">Professional Drivers</h2>
        <div className="team-grid">
          {departments.drivers.map(member => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="team-cta">
        <h2>Want to Join Our Team?</h2>
        <p>We're always looking for talented, dedicated professionals to join the Blackhawk family.</p>
        <button className="cta-btn" onClick={() => alert('Careers page coming soon!')}>
          View Open Positions
        </button>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="member-modal" onClick={() => setSelectedMember(null)}>
          <div className="member-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>✕</button>
            <div className="member-detail">
              <img src={selectedMember.image} alt={selectedMember.name} />
              <div className="member-info">
                <h2>{selectedMember.name}</h2>
                <h3>{selectedMember.role}</h3>
                <p>{selectedMember.bio}</p>
                <div className="member-contact">
                  <p>📧 {selectedMember.email}</p>
                  <p>📞 {selectedMember.phone}</p>
                </div>
                <button className="linkedin-btn" onClick={() => window.open(selectedMember.linkedin, '_blank')}>
                  Connect on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TeamMemberCard({ member, onClick }) {
  return (
    <div className="team-member-card" onClick={onClick}>
      <div className="member-image-container">
        <img src={member.image} alt={member.name} />
        <div className="member-overlay">
          <span>View Profile</span>
        </div>
      </div>
      <div className="member-card-info">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
      </div>
    </div>
  );
}

export default TeamPage;
