Warden::Manager.prepend_on_request do |warden|
  warden.logout(:admin)
end
