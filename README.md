# Portfolio
My Web Dev portfolio

Stat Tracker Release Notes 

Release - v1.1
02/06/2021

# NEW FEATURES

  - N/a

# IMPROVEMENTS

  - Redundancies found in displaying weighted totals of both applications and contracts as both do not require weighting before final activity total worth is calculated. Both have now been collated into a single output field displayed as NBO.
  - Redundancies found in displaying weighted totals of both pendings and payouts as both do not require weighting before final activity total worth is calculated. Both have now been collated into a      single output field displayed as Payout.
  - Both App and Pending display fields removed. 

# ISSUES & FIXES

  - Issue - Clear stats button would not display when viewport was smaller than 990px.
    * Fix - 'Clear stats button' is no longer bound to a responisve dropdown menu and will display regardless of viewport size.

# Impacts 

  - Though a marginal decline in load and display time of the web app has been noted, it is still well below 2000 miliseconds on a fibre line and between 1700 and 5000 milliseconds on a 3G connection, this can be optimized in the next version.