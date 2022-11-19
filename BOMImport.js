//Can also probably be merged into another class

function importBOMData() {
    /*
    If the BOM Data has structure (i.e. levels) on the item numbers, but no quantities
    0 Import data to temp table; add index [0... n] where n is the rows in the table minus 1
    10 Find the max level value of any row
    20 Write all items where lvl = lvlmax to item database
        30 Check if the item exists
            40 If exists -> error log indicating duplicate; move on
                50 If all metadata matches, return only the UID for the item
                60 Else, return the item UID and add to error log the mismatched data as pairs
            70 Else write item to the itemData DB and return the new entry's UID
            80 Append the item UID to BOM import table (aka the temp table)
    90 Starting at the end of the table, find the 1st item with LVL = LVLmax-1
        100 build temp array with LVLMax items where index is greater than the item from the "start" (now the end-ish).
        110 Make sure to handle arbitrary cases where there is no data (i.e. the item has no children)
        120 Loop through the rows in the new temp array (temp children array)
            130 Search for itemID in children array
                140 If DNE, write to array, set qty = 1
                150 If exists, item qty += 1
            160 Write temp children array data to tblBOMData with the new qty info
            170 Delete the rows from original temp table that we grabbed
        180 Loop to next item and do it again (remember; we're going in reverse)
    190 Loop 90 again with the next level items (i.e. LVLmax-2, -3, -4...) until all items are done
    */
}