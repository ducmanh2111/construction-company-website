Admin.seed do |s|
  s.id = 1
  s.user_name = "admin_manager"
  s.password = "admin_manager"
  s.role = "manager"
  s.active = true
end

Admin.seed do |s|
  s.id = 2
  s.user_name = "admin_editor"
  s.password = "admin_editor"
  s.role = "editor"
  s.active = true
end
