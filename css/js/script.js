// Ibyiza Solutions — shared site script
// Handles: mobile nav toggle, and the contact form (no backend yet,
// so it opens a pre-filled email instead of pretending to submit).

document.addEventListener('DOMContentLoaded', function () {

  // Mobile navigation toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('navMenu');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact / inquiry form: opens a pre-filled email.
  // Replace this with a real backend or form service when one exists.
  var form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);

      var lines = [
        'Name: ' + (data.get('name') || ''),
        'Company: ' + (data.get('company') || ''),
        'Job Title: ' + (data.get('jobTitle') || ''),
        'Email: ' + (data.get('email') || ''),
        'Phone: ' + (data.get('phone') || ''),
        'Machine / Equipment: ' + (data.get('equipment') || ''),
        '',
        'Problem:',
        (data.get('problem') || '')
      ].join('\n');

      var subject = encodeURIComponent('Engineering Inquiry — ' + (data.get('company') || 'Ibyiza Solutions'));
      var body = encodeURIComponent(lines);

      window.location.href = 'mailto:Ibyizasolutions@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
