var container = document.querySelector('.img-container');
        var bigHeart = document.querySelector('#big-heart');
        var btnHeart = document.querySelector('#btn-heart');

        container.addEventListener('dblclick', function () {
            // 1. Animate the Big Overlay Heart
            bigHeart.style.transform = 'translate(-50%, -50%) scale(1)';
            bigHeart.style.opacity = '0.8';

            // 2. Turn the Bottom Heart Red
            btnHeart.className = 'ri-heart-3-fill'; // Switch icon to filled
            btnHeart.style.color = '#f91880'; // Instagram Red color

            // 3. Remove the Big Heart after animation
            setTimeout(function () {
                bigHeart.style.opacity = '0';
            }, 1000);

            setTimeout(function () {
                bigHeart.style.transform = 'translate(-50%, -50%) scale(0)';
            }, 1200);
        });

        //  Allow clicking the bottom heart directly
        btnHeart.addEventListener('click', function() {
            if (btnHeart.classList.contains('ri-heart-3-line')) {
                btnHeart.className = 'ri-heart-3-fill';
                btnHeart.style.color = '#f91880';
                // Trigger big heart too for fun
                bigHeart.style.transform = 'translate(-50%, -50%) scale(1)';
                bigHeart.style.opacity = '0.8';
                setTimeout(() => bigHeart.style.opacity = '0', 1000);
                setTimeout(() => bigHeart.style.transform = 'translate(-50%, -50%) scale(0)', 1200);
            } else {
                btnHeart.className = 'ri-heart-3-line';
                btnHeart.style.color = 'black';
            }
        });