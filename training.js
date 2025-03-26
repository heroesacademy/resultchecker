// Course enrollment functionality
document.querySelectorAll('.enroll-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    if (!isLoggedIn()) {
      showLoginModal();
      return;
    }
    
    const courseId = btn.dataset.course;
    try {
      const response = await fetch('/server/api/courses/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: getCurrentUser().id,
          courseId: courseId
        })
      });
      
      if (response.ok) {
        window.location.href = `/course-player.html?course=${courseId}`;
      }
    } catch (error) {
      console.error('Enrollment error:', error);
    }
  });
});