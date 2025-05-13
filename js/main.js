// Page and DataPage Configuration
const WMS_CONFIG = {
    // Each key represents a page in the system
    "dashboard": {
        title: "Dashboard",
        icon: "📊",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "975940002f17e3c451e748bcb12a", // Dashboard stats
            relatedLists: [
                { title: "Recent Activity", dpid: "97594000b7fe2efcda5c49a6a3c7" }
            ]
        },
        buttons: []
    },
    "purchase-orders": {
        title: "Purchase Orders",
        icon: "📋",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000040b9d986ff44f68974d", // PO list
            details: "97594000e98e324644c14ec3991f", // PO details
            relatedLists: [
                { title: "Purchase Order Items", dpid: "9759400078819e1302ad47aa9c7f", paramName: "PurchaseOrderID" }
            ]
        },
        buttons: [
            { name: "Purchase Order", dpid: "97594000e5a237cd35884e7997e9", modal: true }
        ],
        detailsParam: "PurchaseOrderID"
    },
    "orders": {
        title: "Orders & Transfers",
        icon: "📝",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000b7fe2efcda5c49a6a3c7", // Orders list
            details: "9759400076c3253df0a438092d9", // Order details 
            relatedLists: [
                { title: "Order Items", dpid: "97594000b4652b30419345b5ac30", paramName: "OrderID" }
            ]
        },
        buttons: [
            { 
                name: "Order", 
                options: [
                    { label: "Customer Order", value: "customer", dpid: "975940000c138cee4729441Q0a15e" },
                    { label: "Transfer", value: "transfer", dpid: "975940000c138cee47294410a15e?OrderType=Transfer" }
                ],
                modal: true
            }
        ],
        detailsParam: "OrderID"
    },
    "inventory": {
        title: "Inventory",
        icon: "📦",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000xyz123" // Replace with actual inventory datapage ID
        },
        buttons: []
    },
    "shipments": {
        title: "Shipments",
        icon: "🚚",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "9759400020270d4c4dbb4f508ce2"
        },
        buttons: [
            { name: "Shipment", dpid: "9759400020270d4c4dbb4f508ce2", modal: true }
        ]
    },
    "usage": {
        title: "Usage",
        icon: "👓",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000usage_list" // Replace with actual usage list datapage ID
        },
        buttons: [
            { name: "Usage", dpid: "97594000usage_form", modal: true, btnClass: "create-po-btn", btnStyle: "background: #38a169;" }
        ]
    },
    "tasks": {
        title: "Warehouse Tasks",
        icon: "⚙️",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000task_list" // Replace with actual task list datapage ID
        },
        buttons: []
    },
    "special-requests": {
        title: "Special Requests",
        icon: "🛠️",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000aaa51875ed3a4123a20d"
        },
        buttons: [
            { name: "Request", dpid: "97594000aaa51875ed3a4123a20d", modal: true, btnClass: "create-po-btn", btnStyle: "background: #805ad5;" }
        ]
    },
    "clinics": {
        title: "Clinics & Events",
        icon: "🏥",
        navSection: "Management",
        showInNav: true,
        datapages: {
            main: "975940001893a85070034f04be79"
        },
        buttons: []
    }
};

// Store Caspio DataPage URLs in a configuration object
const CASPIO_DATAPAGES = {
    purchaseOrderCreate: 'https://c2ect483.caspio.com/dp/97594000e5a237cd35884e7997e9/emb',
    transferOrderCreate: 'https://c2ect483.caspio.com/dp/975940000c138cee47294410a15e/emb?OrderType=Transfer',
    customerOrderCreate: 'https://c2ect483.caspio.com/dp/975940000c138cee4729441Q0a15e/emb',
    shipmentCreate: 'https://c2ect483.caspio.com/dp/9759400020270d4c4dbb4f508ce2/emb',
    usageCreate: 'https://c2ect483.caspio.com/dp/97594000usage_form/emb',
    specialRequestCreate: 'https://c2ect483.caspio.com/dp/97594000aaa51875ed3a4123a20d/emb'
};

// Define standard modal option configurations
const MODAL_OPTIONS = {
    orderTypes: {
        title: 'Order Type',
        name: 'orderType',
        items: [
            { label: 'Transfer', value: 'transfer', dataPageKey: 'transferOrderCreate', formName: 'Transfer' },
            { label: 'Customer Order', value: 'customer', dataPageKey: 'customerOrderCreate', formName: 'Customer Order' }
        ]
    },
    // Add more option sets as needed
};

// Tab switching functionality
function switchTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Remove active class from all tabs
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Show selected tab content and mark tab as active
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Generic modal system
function openGenericModal(config) {
    // Check if the generic modal exists, otherwise create it
    let modal = document.getElementById('generic-modal');
    if (!modal) {
        // Create the modal element
        modal = document.createElement('div');
        modal.id = 'generic-modal';
        modal.className = 'modal';
        modal.style.display = 'none';
        
        // Create the modal HTML structure
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="generic-modal-title" class="card-title">Modal Title</h2>
                    <span class="close-modal" onclick="closeGenericModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <div id="generic-modal-options-container" style="margin-bottom:1rem; display:none;">
                    </div>
                    <div id="generic-modal-form-container" class="datapage-container">
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    const titleEl = document.getElementById('generic-modal-title');
    const optionsContainer = document.getElementById('generic-modal-options-container');
    const formContainer = document.getElementById('generic-modal-form-container');

    if (!titleEl || !optionsContainer || !formContainer) {
        console.error('Generic modal elements not found!');
        return;
    }

    // Set modal title
    titleEl.textContent = config.title || 'Create New Item';

    // Clear previous content
    optionsContainer.innerHTML = '';
    optionsContainer.style.display = 'none';

    // Handle options (like order type selection)
    if (config.options) {
        optionsContainer.style.display = 'block';
        const optionsTitle = document.createElement('div');
        optionsTitle.className = 'nav-section-title';
        optionsTitle.textContent = config.options.title || 'Select Type';
        optionsContainer.appendChild(optionsTitle);

        const optionsRadioGroup = document.createElement('div');
        optionsRadioGroup.className = 'order-type-options'; // Or a more generic class
        optionsRadioGroup.style.display = 'flex';
        optionsRadioGroup.style.gap = '1rem';
        optionsRadioGroup.style.marginTop = '0.5rem';

        config.options.items.forEach((item, index) => {
            const label = document.createElement('label');
            label.style.flex = '1';
            label.style.padding = '1rem';
            label.style.border = '1px solid #e2e8f0';
            label.style.borderRadius = '8px';
            label.style.cursor = 'pointer';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = config.options.name || 'modalItemType';
            radio.value = item.value;
            if (index === 0 || item.checked) { // Default check the first or specified item
                radio.checked = true;
            }

            // Event listener to load the specific DataPage when an option changes
            radio.addEventListener('change', () => {
                loadDataPageIntoModal(item.dataPageKey, config.params, formContainer, item.formName);
            });

            const span = document.createElement('span');
            span.style.fontWeight = '500';
            span.style.marginLeft = '0.5rem';
            span.textContent = item.label;

            label.appendChild(radio);
            label.appendChild(span);
            optionsRadioGroup.appendChild(label);
        });
        optionsContainer.appendChild(optionsRadioGroup);

        // Load initial DataPage based on the default checked option
        const initiallyCheckedOption = config.options.items.find((item, index) => index === 0 || item.checked) || config.options.items[0];
        if (initiallyCheckedOption) {
            loadDataPageIntoModal(initiallyCheckedOption.dataPageKey, config.params, formContainer, initiallyCheckedOption.formName);
        }
    } else if (config.dataPageKey) {
        // If no options, load the specified DataPage directly
        loadDataPageIntoModal(config.dataPageKey, config.params, formContainer, config.formName);
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function loadDataPageIntoModal(dataPageKey, params, container, formName) {
    // Clear the container
    container.innerHTML = '';
    
    const dataPageUrl = CASPIO_DATAPAGES[dataPageKey];

    if (!dataPageUrl) {
        container.innerHTML = `<p>Error: DataPage URL for key '${dataPageKey}' not found.</p>`;
        console.error(`DataPage URL for key '${dataPageKey}' not found.`);
        return;
    }

    let fullUrl = dataPageUrl;
    if (params) {
        const urlParams = new URLSearchParams();
        for (const key in params) {
            urlParams.append(key, params[key]);
        }
        if (urlParams.toString()) {
            fullUrl += (dataPageUrl.includes('?') ? '&' : '?') + urlParams.toString();
        }
    }

    // Create the script that will load the Caspio form
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = fullUrl;
    
    // Append the script to load the form
    container.appendChild(script);
}

function closeGenericModal() {
    const modal = document.getElementById('generic-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
    
    // Clean up containers
    const formContainer = document.getElementById('generic-modal-form-container');
    if (formContainer) {
        formContainer.innerHTML = '';
    }
    const optionsContainer = document.getElementById('generic-modal-options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        optionsContainer.style.display = 'none';
    }
}

// Data-attribute based modal system
function initializeModalTriggers() {
    // Find all elements with the modal-trigger class
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    
    // Add click event listener to each trigger
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Get configuration from data attributes
            const config = {
                title: this.getAttribute('data-modal-title') || 'Create New Item',
                formName: this.getAttribute('data-modal-form-name'),
                dataPageKey: this.getAttribute('data-modal-key')
            };
            
            // Check if this modal has options
            if (this.hasAttribute('data-modal-options')) {
                // Get the options configuration from the MODAL_OPTIONS object
                const optionsKey = this.getAttribute('data-modal-options');
                if (MODAL_OPTIONS[optionsKey]) {
                    config.options = MODAL_OPTIONS[optionsKey];
                }
            }
            
            // Check for additional parameters
            if (this.hasAttribute('data-modal-params')) {
                try {
                    config.params = JSON.parse(this.getAttribute('data-modal-params'));
                } catch (e) {
                    console.error('Invalid JSON in data-modal-params:', e);
                }
            }
            
            // Open the modal with the configuration
            openGenericModal(config);
        });
    });
}

// Function to generate sidebar HTML from configuration
function generateSidebar(activePage) {
    let navSections = {};
    
    // Organize items by section
    Object.keys(WMS_CONFIG).forEach(pageKey => {
        const page = WMS_CONFIG[pageKey];
        if (!page.showInNav) return;
        
        if (!navSections[page.navSection]) {
            navSections[page.navSection] = [];
        }
        
        navSections[page.navSection].push({
            key: pageKey,
            title: page.title,
            icon: page.icon
        });
    });
    
    // Generate the HTML
    let sidebarHtml = `
        <aside class="sidebar">
            <div class="logo">
                <div class="logo-icon"></div>
                <span class="logo-text">WMS</span>
            </div>
    `;
    
    // Add each navigation section
    Object.keys(navSections).forEach(section => {
        sidebarHtml += `
            <nav class="nav-section">
                <div class="nav-section-title">${section}</div>
        `;
        
        // Add each page in this section
        navSections[section].forEach(page => {
            sidebarHtml += `
                <a href="javascript:void(0)" data-page="${page.key}" class="nav-item ${activePage === page.key ? 'active' : ''}">
                    <div class="nav-icon">${page.icon}</div>
                    ${page.title}
                </a>
            `;
        });
        
        sidebarHtml += `</nav>`;
    });
    
    // Add user profile section
    sidebarHtml += `
            <div class="user-profile">
                <div class="user-avatar">JD</div>
                <div class="user-info">
                    <div class="user-name">John Doe</div>
                    <div class="user-role">Warehouse Manager</div>
                </div>
            </div>
        </aside>
    `;
    
    return sidebarHtml;
}

// Function to generate header buttons from configuration
function generateHeaderButtons(pageKey) {
    if (!WMS_CONFIG[pageKey] || !WMS_CONFIG[pageKey].buttons || WMS_CONFIG[pageKey].buttons.length === 0) {
        return '';
    }
    
    let buttonsHtml = '';
    
    WMS_CONFIG[pageKey].buttons.forEach(button => {
        let btnClass = button.btnClass || 'create-po-btn';
        let btnStyle = button.btnStyle || '';
        
        if (button.options) {
            // Button with multiple options (modal with choices)
            buttonsHtml += `
                <button class="${btnClass} modal-trigger" 
                        style="${btnStyle}" 
                        data-modal-title="Create New ${button.name}"
                        data-modal-options="${pageKey}-options">
                    + Create ${button.name}
                </button>
            `;
            
            // Also need to define the options in MODAL_OPTIONS
            if (!MODAL_OPTIONS[`${pageKey}-options`]) {
                MODAL_OPTIONS[`${pageKey}-options`] = {
                    title: 'Select Type',
                    name: `${pageKey}Type`,
                    items: button.options.map(opt => ({
                        label: opt.label,
                        value: opt.value,
                        dataPageKey: `${opt.value}${button.name.replace(/\s+/g, '')}Create`,
                        formName: opt.label
                    }))
                };
            }
        } else if (button.modal) {
            // Simple modal button
            buttonsHtml += `
                <button class="${btnClass} modal-trigger" 
                        style="${btnStyle}" 
                        data-modal-title="Create New ${button.name}" 
                        data-modal-key="${pageKey}${button.name.replace(/\s+/g, '')}Create"
                        data-modal-form-name="${button.name}">
                    + Create ${button.name}
                </button>
            `;
        } else {
            // Direct link button
            buttonsHtml += `
                <button class="${btnClass}" 
                        style="${btnStyle}"
                        onclick="navigateTo('${pageKey}/${button.action || 'create'}')">
                    + Create ${button.name}
                </button>
            `;
        }
    });
    
    return buttonsHtml;
}

// Function to generate header HTML
function generateHeader(pageTitle, additionalButtons = '') {
    return `
        <header class="header">
            <div class="header-left">
                <h1 class="page-title">${pageTitle}</h1>
            </div>
            <div class="header-right">
                <div class="notification-bell">
                    <span>🔔</span>
                    <span class="notification-badge">3</span>
                </div>
                ${additionalButtons}
            </div>
        </header>
    `;
}

// Updated navigateTo function
function navigateTo(pagePath) {
    // Split into page and subpath if applicable
    const parts = pagePath.split('/');
    const pageKey = parts[0];
    const subPath = parts.length > 1 ? parts[1] : '';
    
    // Make sure page exists in config
    if (!WMS_CONFIG[pageKey]) {
        console.error('No route found for:', pageKey);
        return;
    }
    
    // Determine the actual URL
    let relativePath;
    
    if (subPath === 'details' && WMS_CONFIG[pageKey].datapages.details) {
        // This is a details page
        relativePath = `pages/generic/details.html?page=${pageKey}`;
    } else if (subPath === 'create') {
        // This is a create page
        relativePath = `pages/generic/form.html?page=${pageKey}&form=create`;
    } else if (subPath) {
        // Some other subpath
        relativePath = `pages/${pageKey}/${subPath}.html`;
    } else {
        // Main page
        relativePath = `pages/generic/index.html?page=${pageKey}`;
        // Special case for dashboard
        if (pageKey === 'dashboard') {
            relativePath = 'index.html';
        }
    }
    
    // Get the current URL
    const currentUrl = window.location.href;
    
    // Extract the base URL (everything up to the repository root)
    const baseUrl = currentUrl.split('/').slice(0, 3).join('/');
    
    // For GitHub Pages, we need to add the repository name
    let repoPath = '';
    if (window.location.hostname.includes('github.io')) {
        // Extract the repository name from the URL
        const pathParts = window.location.pathname.split('/');
        if (pathParts.length > 1) {
            repoPath = '/' + pathParts[1];
        }
    }
    
    // Construct the full URL
    const newUrl = baseUrl + repoPath + '/' + relativePath;
    
    // Navigate to the new URL
    window.location.href = newUrl;
}

// Initialize navigation
function initializeNavigation() {
    document.addEventListener('click', function(e) {
        const navItem = e.target.closest('.nav-item');
        
        if (navItem) {
            e.preventDefault();
            
            // Always use data-page attribute
            const pageName = navItem.getAttribute('data-page');
            
            if (pageName) {
                console.log('Page name from data attribute:', pageName);
                navigateTo(pageName);
            } else {
                console.error('No data-page attribute found');
            }
        }
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    // Handle generic modal
    const genericModal = document.getElementById('generic-modal');
    if (genericModal && event.target === genericModal) {
        closeGenericModal();
    }
});

/**
 * Initialize page with standard sidebar, header, and navigation
 * @param {string} activePage - Current page key for highlighting in sidebar
 * @param {string} pageTitle - Optional title override to display in the header
 * @param {string} additionalButtons - Optional HTML for additional header buttons
 */
function initializePage(activePage, pageTitle = null, additionalButtons = null) {
    // Make sure we have a valid page config
    if (!WMS_CONFIG[activePage]) {
        console.error(`No configuration for page: ${activePage}`);
        return;
    }

    // Get page config
    const pageConfig = WMS_CONFIG[activePage];
    
    // Generate sidebar and header
    document.getElementById('sidebar-container').innerHTML = generateSidebar(activePage);
    
    // Use explicit title if provided, otherwise use from config
    const title = pageTitle || pageConfig.title;
    
    // Use explicit buttons if provided, otherwise generate from config
    const buttons = (additionalButtons !== null) ? additionalButtons : generateHeaderButtons(activePage);
    
    document.getElementById('header-container').innerHTML = generateHeader(title, buttons);
    
    // Set up navigation event listeners
    initializeNavigation();
    
    // Initialize modal triggers
    initializeModalTriggers();
    
    console.log(`Page initialized: ${activePage}`);
}