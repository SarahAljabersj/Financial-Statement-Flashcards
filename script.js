document.addEventListener('DOMContentLoaded', function() {
    // Flashcard data focused on account titles and financial statements
    const flashcardsData = [
        // Assets
        { id: 1, term: "Cash", statement: "Balance Sheet", category: "Current Asset" },
        { id: 2, term: "Accounts Receivable", statement: "Balance Sheet", category: "Current Asset" },
        { id: 3, term: "Allowance for Doubtful Accounts", statement: "Balance Sheet", category: "Current Asset—Contra" },
        { id: 4, term: "Interest Receivable", statement: "Balance Sheet", category: "Current Asset" },
        { id: 5, term: "Inventory", statement: "Balance Sheet", category: "Current Asset" },
        { id: 6, term: "Supplies", statement: "Balance Sheet", category: "Current Asset" },
        { id: 7, term: "Prepaid Insurance", statement: "Balance Sheet", category: "Current Asset" },
        { id: 8, term: "Prepaid Rent", statement: "Balance Sheet", category: "Current Asset" },
        { id: 9, term: "Land", statement: "Balance Sheet", category: "Plant Asset" },
        { id: 10, term: "Equipment", statement: "Balance Sheet", category: "Plant Asset" },
        { id: 11, term: "Accumulated Depreciation—Equipment", statement: "Balance Sheet", category: "Plant Asset—Contra" },
        { id: 12, term: "Buildings", statement: "Balance Sheet", category: "Plant Asset" },
        { id: 13, term: "Accumulated Depreciation—Buildings", statement: "Balance Sheet", category: "Plant Asset—Contra" },
        { id: 14, term: "Copyrights", statement: "Balance Sheet", category: "Intangible Asset" },
        { id: 15, term: "Goodwill", statement: "Balance Sheet", category: "Intangible Asset" },
        { id: 16, term: "Patents", statement: "Balance Sheet", category: "Intangible Asset" },
        { id: 17, term: "Stock Investments", statement: "Balance Sheet", category: "Current Asset/Long-Term Investment" },
        { id: 18, term: "Debt Investments", statement: "Balance Sheet", category: "Current Asset/Long-Term Investment" },

        // Liabilities
        { id: 19, term: "Notes Payable", statement: "Balance Sheet", category: "Current/Long-Term Liability" },
        { id: 20, term: "Accounts Payable", statement: "Balance Sheet", category: "Current Liability" },
        { id: 21, term: "Unearned Service Revenue", statement: "Balance Sheet", category: "Current Liability" },
        { id: 22, term: "Salaries and Wages Payable", statement: "Balance Sheet", category: "Current Liability" },
        { id: 23, term: "Interest Payable", statement: "Balance Sheet", category: "Current Liability" },
        { id: 24, term: "Dividends Payable", statement: "Balance Sheet", category: "Current Liability" },
        { id: 25, term: "Income Taxes Payable", statement: "Balance Sheet", category: "Current Liability" },
        { id: 26, term: "Bonds Payable", statement: "Balance Sheet", category: "Long-Term Liability" },
        { id: 27, term: "Discount on Bonds Payable", statement: "Balance Sheet", category: "Long-Term Liability—Contra" },
        { id: 28, term: "Premium on Bonds Payable", statement: "Balance Sheet", category: "Long-Term Liability—Contra" },
        { id: 29, term: "Mortgage Payable", statement: "Balance Sheet", category: "Long-Term Liability" },

        // Equity
        { id: 30, term: "Common Stock", statement: "Balance Sheet", category: "Stockholders' Equity" },
        { id: 31, term: "Paid-in Capital in Excess of Par Value—Common Stock", statement: "Balance Sheet", category: "Stockholders' Equity" },
        { id: 32, term: "Preferred Stock", statement: "Balance Sheet", category: "Stockholders' Equity" },
        { id: 33, term: "Paid-in Capital in Excess of Par Value—Preferred Stock", statement: "Balance Sheet", category: "Stockholders' Equity" },
        { id: 34, term: "Treasury Stock", statement: "Balance Sheet", category: "Stockholders' Equity" },
        { id: 35, term: "Retained Earnings", statement: "Balance Sheet and Retained Earnings Statement", category: "Stockholders' Equity" },
        { id: 36, term: "Dividends", statement: "Retained Earnings Statement", category: "Temporary Account" },
        

        // Revenues
        { id: 38, term: "Service Revenue", statement: "Income Statement", category: "Revenue" },
        { id: 39, term: "Sales Revenue", statement: "Income Statement", category: "Revenue" },
        { id: 40, term: "Sales Discounts", statement: "Income Statement", category: "Revenue—Contra" },
        { id: 41, term: "Sales Returns and Allowances", statement: "Income Statement", category: "Revenue—Contra" },
        { id: 42, term: "Interest Revenue", statement: "Income Statement", category: "Other Income" },
        { id: 43, term: "Gain on Disposal of Plant Assets", statement: "Income Statement", category: "Other Income" },
        { id: 44, term: "Dividend Revenue", statement: "Income Statement", category: "Other Income" },

        // Expenses
        { id: 45, term: "Administrative Expenses", statement: "Income Statement", category: "Operating Expense" },
        { id: 46, term: "Amortization Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 47, term: "Bad Debt Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 48, term: "Cost of Goods Sold", statement: "Income Statement", category: "Cost of Goods Sold" },
        { id: 49, term: "Depreciation Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 50, term: "Freight-Out", statement: "Income Statement", category: "Operating Expense" },
        { id: 51, term: "Income Tax Expense", statement: "Income Statement", category: "Income Tax Expense" },
        { id: 52, term: "Insurance Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 53, term: "Interest Expense", statement: "Income Statement", category: "Other Expense" },
        { id: 54, term: "Loss on Disposal of Plant Assets", statement: "Income Statement", category: "Other Expense" },
        { id: 55, term: "Maintenance and Repairs Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 56, term: "Rent Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 57, term: "Salaries and Wages Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 58, term: "Selling Expenses", statement: "Income Statement", category: "Operating Expense" },
        { id: 59, term: "Supplies Expense", statement: "Income Statement", category: "Operating Expense" },
        { id: 60, term: "Utilities Expense", statement: "Income Statement", category: "Operating Expense" }
    ];

    // DOM elements
    const flashcard = document.getElementById('flashcard');
    const cardFront = document.getElementById('cardFront');
    const cardBack = document.getElementById('cardBack');
    const accountName = document.getElementById('accountName');
    const categoryBadge = document.getElementById('categoryBadge');
    const statementText = document.getElementById('statementText');
    const currentCardNum = document.getElementById('currentCardNum');
    const totalCards = document.getElementById('totalCards');
    const progressBar = document.getElementById('progressBar');
    const statementFilter = document.getElementById('statementFilter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const randomBtn = document.getElementById('randomBtn');
    const flipBtn = document.getElementById('flipBtn');

    // Application state
    let currentCardIndex = 0;
    let isFlipped = false;
    let currentStatementFilter = 'All';
    let filteredCards = [...flashcardsData];

    // Create statement filter buttons
    function createStatementFilter() {
        const statements = ["All", "Balance Sheet", "Income Statement", "Retained Earnings Statement"];
        
        statements.forEach(statement => {
            const button = document.createElement('button');
            button.textContent = statement;
            button.className = `filter-button ${statement === 'All' ? 'active' : ''}`;
            button.addEventListener('click', () => {
                document.querySelectorAll('.filter-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                currentStatementFilter = statement;
                filterCards();
            });
            statementFilter.appendChild(button);
        });
    }

    // Filter cards based on current filter
    function filterCards() {
        filteredCards = currentStatementFilter === 'All' 
            ? [...flashcardsData]
            : flashcardsData.filter(card => card.statement.includes(currentStatementFilter));
        
        currentCardIndex = 0;
        isFlipped = false;
        totalCards.textContent = filteredCards.length;
        
        if (filteredCards.length > 0) {
            renderCard();
            flashcard.classList.remove('flipped');
        } else {
            accountName.textContent = 'No cards match the selected filter';
            statementText.textContent = '';
            categoryBadge.textContent = '';
            currentCardNum.textContent = '0';
            progressBar.style.width = '0%';
        }
    }

    // Get CSS class for category badge
    function getCategoryBadgeClass(statement) {
        if (statement.includes('Balance Sheet')) return 'balance-sheet';
        if (statement.includes('Income Statement')) return 'income-statement';
        if (statement.includes('Retained Earnings')) return 'retained-earnings';
        return 'other-statement';
    }

    // Render the current card
    function renderCard() {
        if (filteredCards.length === 0) return;
        
        const card = filteredCards[currentCardIndex];
        
        accountName.textContent = card.term;
        statementText.textContent = card.statement;
        categoryBadge.textContent = card.category;
        categoryBadge.className = `category-badge ${getCategoryBadgeClass(card.statement)}`;
        
        currentCardNum.textContent = currentCardIndex + 1;
        
        // Update progress bar
        const progress = ((currentCardIndex + 1) / filteredCards.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Event handlers
    function flipCard() {
        flashcard.classList.toggle('flipped');
        isFlipped = !isFlipped;
    }

    function nextCard() {
        if (filteredCards.length === 0) return;
        
        currentCardIndex = (currentCardIndex + 1) % filteredCards.length;
        renderCard();
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }
    }

    function prevCard() {
        if (filteredCards.length === 0) return;
        
        currentCardIndex = (currentCardIndex - 1 + filteredCards.length) % filteredCards.length;
        renderCard();
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }
    }

    function randomCard() {
        if (filteredCards.length <= 1) return;
        
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * filteredCards.length);
        } while (newIndex === currentCardIndex);
        
        currentCardIndex = newIndex;
        renderCard();
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }
    }

    // Initialize the application
    function init() {
        createStatementFilter();
        
        // Set up event listeners
        flashcard.addEventListener('click', flipCard);
        flipBtn.addEventListener('click', flipCard);
        prevBtn.addEventListener('click', prevCard);
        nextBtn.addEventListener('click', nextCard);
        randomBtn.addEventListener('click', randomCard);
        
        // Initial render
        totalCards.textContent = filteredCards.length;
        renderCard();
    }

    // Start the app
    init();
});
