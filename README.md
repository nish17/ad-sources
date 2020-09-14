# ad-sources

## Problem Statement:

Task is to develop a SelectSourcePage as per the [design](https://drive.google.com/file/d/1aqTierO6Pgvbpn_UkS5Ry9vIXXmy3W-H/view). As you click the "TEST / DEBUG" button, the page should list all the data sources that you get fetch from an API.

### Deployed on [![Netlify Status](https://api.netlify.com/api/v1/badges/0fc8bbf0-0ac2-4fe3-a933-db1f77d114b4/deploy-status)](https://app.netlify.com/sites/hardcore-allen-886d4b/deploys)

### Check it out: https://airboxr.snimesh.com

### CodeSandbox: https://vh0m0.csb.app/

### Approach:

- (OLD) On every single click to add favorite source, I am changing the location of that particular object in the array and adding it at the top which implements the feature of moving element at the top on favorite.

- (NEW) On receving the data from the API, I am adding few fields to the received data, which makes to easier to implement the required functionalities.  

### Known Issues:

- Let's say we have 3 favorite sources and all of them are at the top, now if we unmark the middle source it doesn't update the list and move the 3rd favorite at the top. (✅ Fixed)
- 'Google Ads' image is not loading because of Adblocker ChromeExtension. Please try it once in incognito mode.
