document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search');
    const searchInput = document.querySelector('.search__input');
    const sideNavLinks = document.querySelectorAll('.side-nav__link');
    const bookmarkIcons = document.querySelectorAll('.user-nav__icon-box');
    const btnInlines = document.querySelectorAll('.btn-inline');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            showModal('Search Results', `
                <p>Searching for hotels matching: <strong>${escapeHtml(query)}</strong></p>
                <div style="margin-top: 2rem;">
                    <p>Available destinations:</p>
                    <ul style="list-style: disc; margin-left: 2rem; margin-top: 1rem;">
                        <li>Albufeira, Portugal</li>
                        <li>Lisbon, Portugal</li>
                        <li>Porto, Portugal</li>
                        <li>Faro, Portugal</li>
                    </ul>
                    <button class="btn" style="margin-top: 2rem; background: var(--color-primary); color: #fff; padding: 1.5rem 3rem; border: none; border-radius: 3px; cursor: pointer; font-size: 1.4rem; text-transform: uppercase;">View All Hotels</button>
                </div>
            `);
            searchInput.value = '';
        }
    });

    sideNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            sideNavLinks.forEach(l => l.parentElement.classList.remove('side-nav__item--active'));
            link.parentElement.classList.add('side-nav__item--active');

            const category = link.querySelector('span').textContent;
            showModal(`Browse ${category}`, `
                <p>Explore our selection of ${category.toLowerCase()} options.</p>
                <div style="margin-top: 2rem;">
                    <p>Popular ${category.toLowerCase()} choices:</p>
                    <ul style="list-style: disc; margin-left: 2rem; margin-top: 1rem;">
                        <li>Premium options available</li>
                        <li>Best price guarantee</li>
                        <li>Instant confirmation</li>
                        <li>24/7 customer support</li>
                    </ul>
                    <button class="btn" style="margin-top: 2rem; background: var(--color-primary); color: #fff; padding: 1.5rem 3rem; border: none; border-radius: 3px; cursor: pointer; font-size: 1.4rem; text-transform: uppercase;">Book Now</button>
                </div>
            `);
        });
    });

    bookmarkIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const isBookmark = icon.querySelector('use').getAttribute('xlink:href').includes('bookmark');
            const isChat = icon.querySelector('use').getAttribute('xlink:href').includes('chat');

            if (isBookmark) {
                showModal('Saved Items', `
                    <p>Your saved hotels and bookings</p>
                    <div style="margin-top: 2rem;">
                        <div style="padding: 1.5rem; background: #f4f2f2; border-radius: 3px; margin-bottom: 1rem;">
                            <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem;">Hotel Las Palmas</h3>
                            <p style="color: #777; font-size: 1.4rem;">Albufeira, Portugal</p>
                        </div>
                        <button class="btn" style="margin-top: 1rem; background: var(--color-primary); color: #fff; padding: 1.5rem 3rem; border: none; border-radius: 3px; cursor: pointer; font-size: 1.4rem; text-transform: uppercase;">View All Saved</button>
                    </div>
                `);
            } else if (isChat) {
                showModal('Messages', `
                    <p>Your recent messages and notifications</p>
                    <div style="margin-top: 2rem;">
                        <div style="padding: 1.5rem; background: #f4f2f2; border-radius: 3px; margin-bottom: 1rem;">
                            <p style="font-weight: 600; margin-bottom: 0.5rem;">Booking Confirmation</p>
                            <p style="color: #777; font-size: 1.4rem;">Your reservation at Hotel Las Palmas has been confirmed.</p>
                        </div>
                        <div style="padding: 1.5rem; background: #f4f2f2; border-radius: 3px;">
                            <p style="font-weight: 600; margin-bottom: 0.5rem;">Special Offer</p>
                            <p style="color: #777; font-size: 1.4rem;">Get 20% off your next booking!</p>
                        </div>
                    </div>
                `);
            }
        });
    });

    btnInlines.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = btn.textContent.trim();

            if (text.includes('Albufeira')) {
                showModal('Albufeira, Portugal', `
                    <p>Discover the beautiful coastal city of Albufeira in the Algarve region.</p>
                    <div style="margin-top: 2rem;">
                        <h3 style="font-size: 1.6rem; margin-bottom: 1rem;">Top Attractions:</h3>
                        <ul style="list-style: disc; margin-left: 2rem;">
                            <li>Praia da Falésia</li>
                            <li>Old Town Square</li>
                            <li>Marina de Albufeira</li>
                            <li>Zoomarine Algarve</li>
                        </ul>
                        <button class="btn" style="margin-top: 2rem; background: var(--color-primary); color: #fff; padding: 1.5rem 3rem; border: none; border-radius: 3px; cursor: pointer; font-size: 1.4rem; text-transform: uppercase;">Explore Hotels</button>
                    </div>
                `);
            } else if (text.includes('Show all')) {
                showModal('All Reviews', `
                    <p>Read what our guests are saying about Hotel Las Palmas</p>
                    <div style="margin-top: 2rem; max-height: 40rem; overflow-y: auto;">
                        <div style="padding: 1.5rem; background: #f4f2f2; border-radius: 3px; margin-bottom: 1rem;">
                            <p style="font-style: italic; margin-bottom: 1rem;">"Outstanding service and beautiful rooms! The beach location is perfect, and the staff went above and beyond to make our anniversary special."</p>
                            <p style="font-weight: 600;">Nick Smith - 7.8/10</p>
                        </div>
                        <div style="padding: 1.5rem; background: #f4f2f2; border-radius: 3px; margin-bottom: 1rem;">
                            <p style="font-style: italic; margin-bottom: 1rem;">"Best hotel in Albufeira! The breakfast was incredible, and the free airport shuttle made everything so convenient."</p>
                            <p style="font-weight: 600;">Mary Thomas - 9.3/10</p>
                        </div>
                        <div style="padding: 1.5rem; background: #f4f2f2; border-radius: 3px; margin-bottom: 1rem;">
                            <p style="font-style: italic; margin-bottom: 1rem;">"Perfect location near the beach. Rooms were clean and spacious. Will definitely return!"</p>
                            <p style="font-weight: 600;">James Wilson - 8.5/10</p>
                        </div>
                        <div style="padding: 1.5rem; background: #f4f2f2; border-radius: 3px;">
                            <p style="font-style: italic; margin-bottom: 1rem;">"Great value for money. Staff was friendly and helpful throughout our stay."</p>
                            <p style="font-weight: 600;">Emma Davis - 8.9/10</p>
                        </div>
                    </div>
                `);
            }
        });
    });

    const userNav = document.querySelector('.user-nav__user');
    if (userNav) {
        userNav.style.cursor = 'pointer';
        userNav.addEventListener('click', () => {
            showModal('Account Settings', `
                <p>Manage your Trillo account</p>
                <div style="margin-top: 2rem;">
                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Name</label>
                        <input type="text" value="Steven" style="width: 100%; padding: 1rem; border: 1px solid #ccc; border-radius: 3px; font-size: 1.4rem;">
                    </div>
                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email</label>
                        <input type="email" value="steven@example.com" style="width: 100%; padding: 1rem; border: 1px solid #ccc; border-radius: 3px; font-size: 1.4rem;">
                    </div>
                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Preferences</label>
                        <label style="display: block; margin-top: 0.5rem;">
                            <input type="checkbox" checked> Email notifications
                        </label>
                        <label style="display: block; margin-top: 0.5rem;">
                            <input type="checkbox" checked> Special offers
                        </label>
                    </div>
                    <button class="btn" style="background: var(--color-primary); color: #fff; padding: 1.5rem 3rem; border: none; border-radius: 3px; cursor: pointer; font-size: 1.4rem; text-transform: uppercase;">Save Changes</button>
                </div>
            `);
        });
    }
});

function showModal(title, content) {
    const existingModal = document.getElementById('trillo-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'trillo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.2s;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: #fff;
        padding: 3rem;
        border-radius: 3px;
        max-width: 60rem;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        animation: slideIn 0.3s;
    `;

    const modalHeader = document.createElement('div');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #f4f2f2;
    `;

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = title;
    modalTitle.style.cssText = `
        font-size: 2.4rem;
        font-weight: 300;
        color: #333;
        margin: 0;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 3.5rem;
        color: #999;
        cursor: pointer;
        line-height: 1;
        transition: color 0.2s;
    `;

    closeBtn.addEventListener('click', () => modal.remove());
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.color = '#333');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.color = '#999');

    const modalBody = document.createElement('div');
    modalBody.innerHTML = content;
    modalBody.style.cssText = `
        font-size: 1.4rem;
        line-height: 1.6;
        color: #777;
    `;

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes slideIn {
        from { transform: translateY(-5rem); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
