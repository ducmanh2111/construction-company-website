module ResponseHandler
  def render_ok(data, meta = {})
    render json: {
      data: data,
      meta: { message: I18n.t("api.message.ok") }.merge(meta)
    }, status: :ok
  end

  def render_created(data, serializer, meta = {})
    render json: data,
           serializer: serializer,
           meta: {
             message: I18n.t("api.message.created", class_name: data.class.name, name: data.name)
           }.merge(meta),
           status: :created
  end

  def render_show(data, serializer, meta = {}, class_name: nil)
    class_name ||= data.class.name
    render json: data,
           serializer: serializer,
           meta: {
             message: I18n.t("api.message.get_successfully", class_name: class_name, name: data.name)
           }.merge(meta),
           status: :ok
  end

  def render_updated(data, serializer, meta = {})
    render json: data,
           serializer: serializer,
           meta: {
             message: I18n.t("api.message.updated", class_name: data.class.name, name: data.name)
           }.merge(meta),
           status: :ok
  end

  def render_unauthorized(meta = {})
    render json: {
      meta: {
        message: I18n.t("api.message.unauthorized")
      }.merge(meta)
    }, status: :unauthorized
  end

  def render_badrequest(meta = {})
    render json: {
      meta: {
        message: I18n.t("api.message.badrequest")
      }.merge(meta)
    }, status: :bad_request
  end

  def render_notfound(meta = {})
    render json: {
      meta: {
        message: I18n.t("api.message.not_found")
      }.merge(meta)
    }, status: :not_found
  end

  def render_message(msg)
    render json: {
      meta: {
        message: msg
      }
    }, status: :ok
  end

  # render_unprocessable_entity
  # params: errors, meta
  # errors: Active Model Errors

  def render_unprocessable_entity(errors, meta = {})
    render json: {
      meta: {
        errors: errors.as_json(full_messages: true),
        message: I18n.t("api.message.unprocessable_entity")
      }.merge(meta)
    }, status: :unprocessable_entity
  end

  def render_index(data, meta = {}, data_name: nil, serializer: nil)
    data_name ||= data.klass.name.downcase
    render json: data,
           each_serializer: serializer,
           meta: {
             message: I18n.t("api.message.get_successfully", data_name: data_name)
           }.merge(meta),
           status: :ok
  end
end
