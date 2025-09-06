# MCP Tool Usage Guide for LLMs

This guide provides comprehensive information for LLMs on how to effectively use the Wine Management MCP tools.

## 🍷 Available Tools Overview

### 1. **list-wines** - Complete Wine Inventory

**Purpose**: Get a comprehensive overview of all wines in the database with sales performance metrics.

**When to Use**:

- You need to see the complete wine inventory
- You want to analyze wine performance across different categories
- You're generating reports on wine sales
- You need to understand which wines are most/least popular

**Example Prompts**:

- "Show me all the wines we have in stock"
- "What wines do we carry and how well do they sell?"
- "Give me a complete wine inventory report"
- "Which wines have the highest order counts?"

**Output**:

- Complete list of all wines with sales metrics
- Summary statistics (total wines, average price, total orders, total bottles sold)
- Results sorted alphabetically by wine name

---

### 2. **get-wine-by-id** - Specific Wine Details

**Purpose**: Retrieve comprehensive information about a specific wine by its unique identifier.

**When to Use**:

- You need detailed information about a specific wine
- You want to analyze the performance of a particular wine
- You need to check order history for a specific wine
- You're verifying wine details before making decisions

**IMPORTANT**: You must provide a valid wine ID. If you don't have an ID, use the `list-wines` tool first to find the wine you're interested in.

**Example Prompts**:

- "Show me details for wine ID abc-123"
- "What's the sales performance of wine XYZ?"
- "Give me complete information about this specific wine"
- "How many orders do we have for wine ABC?"

**Parameters**:

- `id` (string, required): The unique identifier (UUID) of the wine to retrieve

**Output**:

- Complete wine details (name, type, price)
- Sales performance metrics (order count, total bottles sold, average order size)
- Recent order history (last 10 orders)
- Revenue calculations and usage tips

---

### 3. **search-wines** - Find Wines by Name

**Purpose**: Search for wines by name using partial text matching.

**When to Use**:

- You need to find wines with similar names
- You want to search for wines from specific regions or producers
- You need to locate wines by partial name matches
- You're discovering wines you might not remember the full name of

**Search Capabilities**:

- Partial wine names (e.g., "Château" finds all Château wines)
- Brand names (e.g., "Opus" finds Opus One)
- Vintage years (e.g., "2015" finds wines from 2015)
- Wine types or regions mentioned in names

**Example Prompts**:

- "Find all Château wines"
- "Search for wines containing 'Opus'"
- "Show me wines with '2015' in the name"
- "Find wines that mention 'Bordeaux'"

**Parameters**:

- `query` (string, required): The search term to look for in wine names

**Output**:

- Search results with sales metrics
- Results sorted by price (highest to lowest)
- Search tips and suggestions

---

### 4. **get-wines-by-type** - Filter by Wine Type

**Purpose**: Retrieve all wines of a specific type with their sales performance data.

**Available Wine Types**:

- `red`: Full-bodied red wines (Bordeaux, Barolo, etc.)
- `white`: Light and crisp white wines
- `rose`: Pink wines with medium body
- `sparkling`: Bubbly wines and champagnes

**When to Use**:

- You need to compare wines within the same category
- You want to analyze performance of a specific wine type
- You're looking for alternatives within a wine category
- You need to generate reports for specific wine types

**Example Prompts**:

- "Show me all red wines"
- "What sparkling wines do we carry?"
- "List all white wines with their sales data"
- "Compare red wine performance"

**Parameters**:

- `type` (string, required): The wine type to filter by (red, white, rose, or sparkling)

**Output**:

- Complete list of wines of the specified type
- Sales performance metrics for each wine
- Price comparisons within the same category
- Summary statistics and analysis

---

### 5. **get-top-selling-wines** - Best Performers

**Purpose**: Retrieve the best-performing wines ranked by sales volume and revenue.

**When to Use**:

- You need to identify your best-selling wines
- You want to analyze top performers for inventory decisions
- You need to understand customer preferences
- You're generating sales performance reports
- You're making decisions about wine promotions or restocking

**Example Prompts**:

- "What are our top 5 selling wines?"
- "Show me the best performing wines"
- "Which wines generate the most revenue?"
- "What wines should we focus on?"

**Parameters**:

- `limit` (number, optional): Number of top wines to return (default: 10, max: 50)

**Output**:

- Top wines ranked by total bottles sold
- Sales performance metrics (order count, bottles sold, revenue)
- Price analysis for top performers
- Performance summary and insights

---

### 6. **get-wine-statistics** - Database Overview

**Purpose**: Provides comprehensive statistics and analytics about the wine database.

**When to Use**:

- You need an overview of your wine inventory
- You want to analyze wine type distribution
- You need to understand pricing strategy
- You're generating executive summaries
- You want to monitor database health

**Example Prompts**:

- "Give me a summary of our wine database"
- "What's the breakdown of wines by type?"
- "Show me wine pricing statistics"
- "Generate a wine inventory report"

**Parameters**: None required

**Output**:

- Overall database metrics (total wines, average price)
- Breakdown by wine type (red, white, rose, sparkling)
- Price analysis and distribution
- Order statistics and insights

---

## 🚀 Best Practices for LLMs

### 1. **Tool Selection Strategy**

- **Start with overview tools** (`list-wines`, `get-wine-statistics`) to understand the data
- **Use specific tools** (`get-wine-by-id`, `search-wines`) for targeted information
- **Combine tools** to build comprehensive reports

### 2. **Parameter Handling**

- Always provide required parameters
- Use appropriate data types (strings for IDs, numbers for limits)
- Validate input before calling tools

### 3. **Error Handling**

- Check if tools return data before processing
- Provide helpful error messages when tools fail
- Suggest alternative approaches when appropriate

### 4. **Data Presentation**

- Format output in a readable way
- Include relevant statistics and summaries
- Provide actionable insights when possible

### 5. **Workflow Examples**

```
1. Get database overview → get-wine-statistics
2. Find wines of interest → search-wines or get-wines-by-type
3. Get detailed info → get-wine-by-id
4. Analyze performance → get-top-selling-wines
5. Generate report → Combine all data
```

## 💡 Advanced Usage Patterns

### **Inventory Analysis**

```
1. Use get-wine-statistics for overview
2. Use get-wines-by-type for category analysis
3. Use get-top-selling-wines for performance insights
4. Combine data for comprehensive inventory report
```

### **Customer Preference Analysis**

```
1. Use get-top-selling-wines to identify popular wines
2. Use get-wines-by-type to analyze category preferences
3. Use get-wine-by-id for detailed wine analysis
4. Identify patterns in customer behavior
```

### **Sales Performance Reporting**

```
1. Use get-wine-statistics for overall metrics
2. Use get-top-selling-wines for top performers
3. Use get-wines-by-type for category performance
4. Generate comprehensive sales report
```

## 🔍 Troubleshooting

### **Common Issues**

- **No wines found**: Check if database has been seeded
- **Invalid wine ID**: Use list-wines to find valid IDs
- **Empty results**: Verify search terms and parameters

### **Data Validation**

- Always check if tools return data
- Validate wine IDs before using get-wine-by-id
- Ensure search queries are appropriate

### **Performance Considerations**

- Use appropriate limits for large datasets
- Combine multiple tool calls efficiently
- Cache results when appropriate

## 📊 Data Structure Understanding

### **Wine Object**

```typescript
{
  id: string,           // Unique identifier
  name: string,         // Wine name
  type: string,         // red, white, rose, or sparkling
  price: number         // Price per bottle
}
```

### **Wine with Stats**

```typescript
{
  id: string,                    // Unique identifier
  name: string,                  // Wine name
  type: string,                  // Wine type
  price: number,                 // Price per bottle
  order_count: number,           // Total number of orders
  total_quantity_sold: number    // Total bottles sold
}
```

### **Order Object**

```typescript
{
  id: string,           // Order identifier
  created_at: string,   // Order date
  wine_id: string,      // Reference to wine
  quantity: number      // Number of bottles
}
```

This guide should help LLMs understand how to effectively use the wine management MCP tools to provide valuable insights and analysis.

