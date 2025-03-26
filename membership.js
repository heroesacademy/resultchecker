// Handle membership registration
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const memberData = {
    type: document.getElementById('membershipType').value,
    // Collect other form data
  };
  
  try {
    const response = await fetch('/server/api/members/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memberData)
    });
    
    if (response.ok) {
      // Redirect to payment gateway
      window.location.href = `/payment?type=membership&amount=${getMembershipFee(memberData.type)}`;
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
});