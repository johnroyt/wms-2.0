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
        buttons: [],
        layout: "dashboard", // Special layout for dashboard
        dashboardElements: {
            inventorySnapshot: {
                title: "Inventory Snapshot",
                linkText: "View Details →",
                linkPage: "inventory",
                items: [
                    { location: "ROC Main Warehouse", qty: "12,450 units" },
                    { location: "Pod - 6 Lane A - Atlanta Clinic", qty: "850 units" },
                    { location: "Pod - 4 Lane - Pending Shipment", qty: "625 units" },
                    { location: "Sale-for-Sight Pod - Idle", qty: "320 units" }
                ]
            },
            reorderAlerts: {
                title: "SKUs Below Reorder Point",
                alertStyle: true,
                items: [
                    { sku: "SKU-1234", name: "Sunglasses", action: "purchaseOrderCreate", actionTitle: "Create New Purchase Order", buttonText: "Create PO" },
                    { sku: "SKU-5678", name: "OneSight Cases", action: "purchaseOrderCreate", actionTitle: "Create New Purchase Order", buttonText: "Create PO" },
                    { sku: "SKU-9012", name: "Eye Drops", action: "purchaseOrderCreate", actionTitle: "Create New Purchase Order", buttonText: "Create PO" }
                ]
            },
            transferTabs: {
                title: "Transfers",
                tabs: [
                    { id: "pending-transfers", title: "Pending Transfers", content: "Pending Transfers DataPage will be embedded here", active: true },
                    { id: "incoming-returns", title: "Incoming Returns", content: "Incoming Returns DataPage will be embedded here" }
                ]
            },
            clinicUsage: {
                title: "Recent Clinic Usage",
                content: "Recent Clinic Usage DataPage will be embedded here",
                actions: [
                    { name: "Log Usage", action: "usageCreate", actionTitle: "Log Clinic Usage", btnClass: "create-po-btn", btnStyle: "background: #38a169;" }
                ]
            }
        }
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
                { title: "Purchase Order Items", dpid: "9759400078819e1302ad47aa9c7f", paramName: "PurchaseOrderID" },
                { title: "Purchase Order Itemtese s", dpid: "9759400078819e1302ad47aa9cdd7f", paramName: "PurchaseOrderID" }
            ]
        },
        buttons: [
            { name: "Purchase Order", action: "purchaseOrderCreate", modal: true }
        ],
        detailsParam: "PurchaseOrderID",
        layout: "list" // Standard list layout
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
            { name: "Customer Order", action: "customerOrderCreate", modal: true },
            { name: "Transfer Order", action: "transferOrderCreate", modal: true }
        ],
        detailsParam: "OrderID",
        layout: "list" // Standard list layout
    },
    "inventory": {
        title: "Inventory",
        icon: "📦",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000xyz123" // Replace with actual inventory datapage ID
        },
        buttons: [],
        layout: "list" // Standard list layout
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
            { name: "Shipment", action: "shipmentCreate", modal: true }
        ],
        layout: "list" // Standard list layout
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
            { name: "Usage", action: "usageCreate", modal: true, btnClass: "create-po-btn", btnStyle: "background: #38a169;" }
        ],
        layout: "list" // Standard list layout
    },
    "tasks": {
        title: "Warehouse Tasks",
        icon: "⚙️",
        navSection: "Main",
        showInNav: true,
        datapages: {
            main: "97594000task_list" // Replace with actual task list datapage ID
        },
        buttons: [],
        layout: "list" // Standard list layout
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
            { name: "Request", action: "specialRequestCreate", modal: true, btnClass: "create-po-btn", btnStyle: "background: #805ad5;" }
        ],
        layout: "list" // Standard list layout
    },
    "clinics": {
        title: "Clinics & Events",
        icon: "🏥",
        navSection: "Management",
        showInNav: true,
        datapages: {
            main: "975940001893a85070034f04be79"
        },
        buttons: [],
        layout: "list" // Standard list layout
    }
};

// Store Caspio DataPage URLs in a configuration object
const CASPIO_DATAPAGES = {
    purchaseOrderCreate: 'https://c2ect483.caspio.com/dp/97594000e5a237cd35884e7997e9/emb',
    transferOrderCreate: 'https://c2ect483.caspio.com/dp/975940000c138cee47294410a15e/emb?OrderType=Transfer',
    customerOrderCreate: 'https://c2ect483.caspio.com/dp/975940000c138cee4729441Q0a15e/emb',
    shipmentCreate: 'https://c2ect483.caspio.com/dp/9759400020270d4c4dbb4f508ce2/emb',
    usageCreate: 'https://c2ect483.caspio.com/dp/97594000usage_form/emb',
    specialRequestCreate: 'https://c2ect483.caspio.com/dp/97594000aaa51875ed3a4123a20d/emb',
    userProfile: 'https://c2ect483.caspio.com/dp/97594000b114afb38f244fcbb64f/emb' // Added user profile datapage
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

// Create the main page content based on page type
function createPageContent(pageKey) {
    console.log(`Creating content for page: ${pageKey}`);
    const mainContent = document.getElementById('main-content');
    if (!mainContent) {
        console.error("Main content container not found!");
        return;
    }
    
    const config = WMS_CONFIG[pageKey];
    
    // Clear existing content
    mainContent.innerHTML = '';
    
    // Create content based on layout type
    if (pageKey === 'dashboard') {
        createDashboardLayout(config);
    } else {
        createStandardLayout(pageKey, config);
    }
}

// Create standard list layout
function createStandardLayout(pageKey, config) {
    const mainContent = document.getElementById('main-content');
    
    // Create standard list container
    const section = document.createElement('div');
    section.className = 'full-width-section';
    
    // Add datapage container
    const datapageContainer = document.createElement('div');
    datapageContainer.className = 'datapage-container';
    
    // If there's a main datapage defined, load it
    if (config.datapages && config.datapages.main) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://c2ect483.caspio.com/dp/${config.datapages.main}/emb`;
        datapageContainer.appendChild(script);
    } else {
        datapageContainer.innerHTML = '<p>No datapage configured for this section</p>';
    }
    
    section.appendChild(datapageContainer);
    mainContent.appendChild(section);
}

// Create dashboard layout with all configured elements
function createDashboardLayout(config) {
    if (!config.dashboardElements) {
        console.error("No dashboard elements configured");
        return;
    }
    
    const mainContent = document.getElementById('main-content');
    
    // Create dashboard grid for inventory and alerts
    const dashboardGrid = document.createElement('div');
    dashboardGrid.className = 'dashboard-grid';
    
    // Add inventory snapshot if configured
    if (config.dashboardElements.inventorySnapshot) {
        dashboardGrid.appendChild(createInventoryCard(config.dashboardElements.inventorySnapshot));
    }
    
    // Add reorder alerts if configured
    if (config.dashboardElements.reorderAlerts) {
        dashboardGrid.appendChild(createAlertCard(config.dashboardElements.reorderAlerts));
    }
    
    mainContent.appendChild(dashboardGrid);
    
    // Add transfer tabs section if configured
    if (config.dashboardElements.transferTabs) {
        mainContent.appendChild(createTabsSection(config.dashboardElements.transferTabs));
    }
    
    // Add clinic usage section if configured
    if (config.dashboardElements.clinicUsage) {
        mainContent.appendChild(createClinicUsageSection(config.dashboardElements.clinicUsage));
    }
}

// Create inventory card for dashboard
function createInventoryCard(config) {
    const card = document.createElement('div');
    card.className = 'inventory-card';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = config.title;
    
    const link = document.createElement('a');
    link.href = 'javascript:void(0)';
    link.onclick = function() { navigateTo(config.linkPage); };
    link.style = 'color: #4c6ef5; font-size: 0.875rem;';
    link.textContent = config.linkText;
    
    header.appendChild(title);
    header.appendChild(link);
    card.appendChild(header);
    
    // Add inventory items
    if (config.items && config.items.length > 0) {
        config.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'location-inventory';
            
            const locationSpan = document.createElement('span');
            locationSpan.className = 'location-name';
            locationSpan.textContent = item.location;
            
            const qtySpan = document.createElement('span');
            qtySpan.className = 'location-qty';
            qtySpan.textContent = item.qty;
            
            div.appendChild(locationSpan);
            div.appendChild(qtySpan);
            card.appendChild(div);
        });
    }
    
    return card;
}

// Create alert card for dashboard
function createAlertCard(config) {
    const card = document.createElement('div');
    card.className = config.alertStyle ? 'alert-card' : 'card';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = config.title;
    
    header.appendChild(title);
    card.appendChild(header);
    
    // Add alert items
    if (config.items && config.items.length > 0) {
        const list = document.createElement('ul');
        list.className = 'alert-list';
        
        config.items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'alert-item';
            
            const span = document.createElement('span');
            span.textContent = `${item.sku}: ${item.name}`;
            
            const button = document.createElement('button');
            button.className = 'reorder-btn modal-trigger';
            button.textContent = item.buttonText || 'Create PO';
            button.setAttribute('data-modal-title', item.actionTitle);
            button.setAttribute('data-modal-key', item.action);
            
            li.appendChild(span);
            li.appendChild(button);
            list.appendChild(li);
        });
        
        card.appendChild(list);
    }
    
    return card;
}

// Create tabs section for dashboard
function createTabsSection(config) {
    const section = document.createElement('div');
    section.className = 'full-width-section';
    
    // Create tabs
    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'tabs';
    
    // Create tab content containers
    const tabContents = [];
    
    if (config.tabs && config.tabs.length > 0) {
        config.tabs.forEach(tabConfig => {
            // Create tab
            const tab = document.createElement('div');
            tab.className = `tab${tabConfig.active ? ' active' : ''}`;
            tab.textContent = tabConfig.title;
            tab.onclick = function(event) { switchTab(event, tabConfig.id); };
            tabsDiv.appendChild(tab);
            
            // Create tab content
            const tabContent = document.createElement('div');
            tabContent.id = tabConfig.id;
            tabContent.className = `tab-content${tabConfig.active ? ' active' : ''}`;
            
            const dataDiv = document.createElement('div');
            dataDiv.className = 'datapage-container';
            
            // Add content or datapage
            if (tabConfig.dpid) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = `https://c2ect483.caspio.com/dp/${tabConfig.dpid}/emb`;
                dataDiv.appendChild(script);
            } else {
                const placeholder = document.createElement('p');
                placeholder.textContent = tabConfig.content || 'No content configured';
                dataDiv.appendChild(placeholder);
            }
            
            tabContent.appendChild(dataDiv);
            tabContents.push(tabContent);
        });
    }
    
    section.appendChild(tabsDiv);
    
    // Add all tab contents
    tabContents.forEach(content => {
        section.appendChild(content);
    });
    
    return section;
}

// Create clinic usage section for dashboard
function createClinicUsageSection(config) {
    const section = document.createElement('div');
    section.className = 'full-width-section';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = config.title;
    
    header.appendChild(title);
    
    // Add actions if configured
    if (config.actions && config.actions.length > 0) {
        const actionsContainer = document.createElement('div');
        
        config.actions.forEach(action => {
            const button = document.createElement('button');
            button.className = action.btnClass || 'create-po-btn';
            button.textContent = `+ ${action.name}`;
            
            if (action.btnStyle) {
                button.style = action.btnStyle;
            }
            
            button.classList.add('modal-trigger');
            button.setAttribute('data-modal-title', action.actionTitle);
            button.setAttribute('data-modal-key', action.action);
            
            actionsContainer.appendChild(button);
        });
        
        header.appendChild(actionsContainer);
    }
    
    section.appendChild(header);
    
    // Add datapage container
    const dataDiv = document.createElement('div');
    dataDiv.className = 'datapage-container';
    
    // Add content or datapage
    if (config.dpid) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://c2ect483.caspio.com/dp/${config.dpid}/emb`;
        dataDiv.appendChild(script);
    } else {
        const placeholder = document.createElement('p');
        placeholder.textContent = config.content || 'No content configured';
        dataDiv.appendChild(placeholder);
    }
    
    section.appendChild(dataDiv);
    
    return section;
}

// Helper function to look up a DataPage URL with fallbacks
function lookupDataPageKey(key) {
    console.log(`Looking up DataPage key: ${key}`);
    
    // First try direct lookup
    if (CASPIO_DATAPAGES[key]) {
        console.log(`Direct match found for key: ${key}`);
        return CASPIO_DATAPAGES[key];
    }
    
    // Try removing prefix (e.g., "purchase-ordersPurchaseOrderCreate" -> "PurchaseOrderCreate")
    const simplifiedKey = key.replace(/^[a-z-]+(Purchase|Order|Shipment|Usage|Request|Create)/i, '$1');
    if (CASPIO_DATAPAGES[simplifiedKey]) {
        console.log(`Simplified match found: ${simplifiedKey}`);
        return CASPIO_DATAPAGES[simplifiedKey];
    }
    
    // Last attempt - split by capital letters
    const basePart = key.split(/(?=[A-Z])/)[0].toLowerCase();
    if (CASPIO_DATAPAGES[basePart]) {
        console.log(`Base part match found: ${basePart}`);
        return CASPIO_DATAPAGES[basePart];
    }
    
    // Not found
    console.error(`No DataPage URL found for key: ${key}`);
    console.log('Available keys:', Object.keys(CASPIO_DATAPAGES).join(', '));
    return null;
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
    
    // Try to get the datapage URL using the lookup function
    const dataPageUrl = lookupDataPageKey(dataPageKey);

    if (!dataPageUrl) {
        container.innerHTML = `<p>Error: DataPage URL for key '${dataPageKey}' not found. Check CASPIO_DATAPAGES configuration.</p>`;
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

    console.log(`Loading DataPage: ${fullUrl}`);

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
    console.log("Initializing modal triggers");
    // Find all elements with the modal-trigger class
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    
    console.log(`Found ${modalTriggers.length} modal triggers`);
    
    // Add click event listener to each trigger
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Get configuration from data attributes
            const config = {
                title: this.getAttribute('data-modal-title') || 'Create New Item',
                formName: this.getAttribute('data-modal-form-name'),
                dataPageKey: this.getAttribute('data-modal-key')
            };
            
            console.log(`Modal trigger clicked with key: ${config.dataPageKey}`);
            
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
    console.log("Generating sidebar for page:", activePage);
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
    

    
    return sidebarHtml;
}

// Function to load the user profile
function loadUserProfile() {
    console.log("Loading user profile");
    const profileContainer = document.getElementById('user-profile-container');
    if (profileContainer) {
        // Create script element properly to ensure execution
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://c2ect483.caspio.com/dp/97594000b114afb38f244fcbb64f/emb';
        profileContainer.appendChild(script);
        console.log("User profile script added");
    } else {
        console.error("User profile container not found!");
    }
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
        
        // Use buttonText property if provided, no automatic prefix
        const buttonText = button.buttonText || button.name;
        // Use modalTitle if provided
        const modalTitle = button.modalTitle || `Create New ${button.name}`;
        
        if (button.options) {
            // Button with multiple options (modal with choices)
            buttonsHtml += `
                <button class="${btnClass} modal-trigger" 
                        style="${btnStyle}" 
                        data-modal-title="${modalTitle}"
                        data-modal-options="${pageKey}-options">
                    ${buttonText}
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
            // Simple modal button - use the action property if available
            const dataPageKey = button.action || `${pageKey}${button.name.replace(/\s+/g, '')}Create`;
            
            buttonsHtml += `
                <button class="${btnClass} modal-trigger" 
                        style="${btnStyle}" 
                        data-modal-title="${modalTitle}" 
                        data-modal-key="${dataPageKey}"
                        data-modal-form-name="${button.name}">
                    ${buttonText}
                </button>
            `;
        } else {
            // Direct link button
            buttonsHtml += `
                <button class="${btnClass}" 
                        style="${btnStyle}"
                        onclick="navigateTo('${pageKey}/${button.action || 'create'}')">
                    ${buttonText}
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

// Create details link utility function
function createDetailsLink(pageKey, paramName, paramValue) {
    return `pages/generic/details.html?page=${pageKey}&${paramName}=${encodeURIComponent(paramValue)}`;
}

// Updated navigateTo function with improved parameter handling
function navigateTo(pagePath) {
    console.log(`Navigating to: ${pagePath}`);
    
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
        // This is a details page - Note use of ? for query parameter
        relativePath = `pages/generic/details.html?page=${pageKey}`;
        
        // If there's an ID parameter in the current URL, add it to the new URL
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = WMS_CONFIG[pageKey].detailsParam;
        const idValue = urlParams.get(idParam);
        if (idValue) {
            relativePath += `&${idParam}=${encodeURIComponent(idValue)}`;
        }
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
    console.log(`Navigating to URL: ${newUrl}`);
    
    // Navigate to the new URL
    window.location.href = newUrl;
}

// Initialize navigation
function initializeNavigation() {
    console.log("Initializing navigation");
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
    console.log(`Initializing page: ${activePage}`);
    
    // Make sure we have a valid page config
    if (!WMS_CONFIG[activePage]) {
        console.error(`No configuration for page: ${activePage}`);
        return;
    }

    // Get page config
    const pageConfig = WMS_CONFIG[activePage];
    
    // Generate sidebar and header
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = generateSidebar(activePage);
        console.log("Sidebar generated");
        
        // Load the user profile
        loadUserProfile();
    } else {
        console.error("Sidebar container not found!");
    }
    
    // Use explicit title if provided, otherwise use from config
    const title = pageTitle || pageConfig.title;
    
    // Use explicit buttons if provided, otherwise generate from config
    const buttons = (additionalButtons !== null) ? additionalButtons : generateHeaderButtons(activePage);
    
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = generateHeader(title, buttons);
        console.log("Header generated");
    } else {
        console.error("Header container not found!");
    }
    
    // Create the main content based on page type
    createPageContent(activePage);
    
    // Set up navigation event listeners
    initializeNavigation();
    
    // Initialize modal triggers
    initializeModalTriggers();
    
    console.log(`Page initialization completed: ${activePage}`);
}

// Initialize MODAL_OPTIONS object if not already defined
const MODAL_OPTIONS = MODAL_OPTIONS || {};