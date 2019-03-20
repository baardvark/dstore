10.times do
    d = Department.create(
        name: Faker::Commerce.department 
    )
10.times do
    Item.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price.to_f,
      department_id: d.id
    )
  end
end

  
  puts "10 Departments and 100 Items Seeded"