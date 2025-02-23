Feature: Sales order transaction

    Background:
        Given I open Jubelio login page
        Then I validate at login page
        When I do login with account 'harusbangetbikinakun@yopmail.com' as username and 'P@per123' as password
        Then Success login into dashboard page
        When I choose 'Penjualan' from top menu
        And I choose 'Transaksi Penjualan' from sub menu
        Then I already on Sales Page

    Scenario: As User create transaction for sales order
        When I open Sales page
        Then I validate sales form page
        When I write 'salesnumber1' as order number
        And I select 'Akulaku' as customer
        And I select 'Pusat' as location
        And I select 'baju murah' as product
        And I submit sales form
        Then I validate 'Data berhasil disimpan' as sales invoice created

    Scenario: As User search transaction for sales order that created before
        When I search 'salesnumber1' as sales invoice that created before
        Then I validate 'salesnumber1' as sales invoice that created before