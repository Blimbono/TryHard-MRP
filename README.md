# TryHard-MRP
DISCLAIMER: I AM AN IDIOT.  I have no idea what the hell I'm doing.  Do not trust me.  Do not trust this code.  It's probably shitty and it's for sure inefficient.  It's a means to an end and a way to learn.  If I delete this, it means I trust my code a little more, but you still should vet this code yourself.  It could be shit.

TryHard MRP is a Javascript project I started to both learn Javascript and build a small Manufacturing Resource Planner (MRP) system.  I figure Excel is just not gonna cut it anymore.

The parsers are written in Javascript for easy implementation in various systems, but I had Google App Script in mind when I wrote this.  I wanted a way to pass arbitrary data in various BOM formats into an organized database.  A lot of different systems fart out bad BOMs.  Trying to cram them into the correct shape (or even a standard format) is a huge pain so I figured it's easier to tear it apart to then be built back up.

I also want this thing to poop the data out into whatever database I feel like.  Maybe it's a SQL database.  Maybe it's a cookie.  It'll probably be Google Sheets for a while (this is regretable).

In the beginning, it'll just be item data and BOM data.
Next it'll have an inventory system.
After that maybe a vendor/purchasing system and an order system (with shortage tracking).
Finally, maybe a cost tracking system where labor and markup costs can be calculated (especially between buy items and their higher level make items)

## ToDo
1. Setup a database for all the item data
2. Write a parser in Javascript to take pre-arranged data from an arbitrary source then convert it to the table while following database rules.  Data sanatizing will occur at the input level.
3. Create forms to display item information and indented BOMs.  Optionally, add a way to group and ungroup lower level BOM items for easier viewing.

## Tables
#### tbl_BOMData
Contains single line entries of Bill of Material data formatted as follows
{**Future plan** - carry the UoM field into hear and perform a check on the table data when new entires are added to ensure the quantity matches the integer-ness of the UoM}
1. PK - indexBOMData *type* **ID**
2. FK - parentID *type* **ID**
3. FK - childID *type* **ID**
4. qty *type* Number

#### tbl_ItemData
Contains the item data.
{**Future plans** - At some point I should probably change this up because the itemNumber and itemRev should be a unique combo and this format allows for multiple entries of the same item number and rev to exist in the database.}
1. PK - itemID *type* **ID**
2. itemNumber *type* **String**
3. itemRev *type* **String**
4. FK - UoMID *type* **ID**
5. description *type* **String**
6. metadata *type* **Object**

#### tbl_UoM
Contains data about a unit of measure.
{**Future plans** - Add a way to convert between units easily or automatically}
1. PK - UoMID *type* **ID**
2. nameShort *type* **String**
3. nameLong *type* **String**
4. family *type* **String**
5. UoMType *type* **String**
6. isInt *type* **Boolean**